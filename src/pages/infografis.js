import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"
import PopularNews from "../components/PopularNews"

import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SearchForm from "../components/SearchForm"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDownload
} from "@fortawesome/free-solid-svg-icons"


const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`
const ImageContainer = styled.div`
  &:hover {
    background-color: #d7d8de;

    a, button {
      display: block !important;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class InfografisPage extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })

    const queryString = require("query-string")
    const parsed = queryString.parse(this.props.location.search)

    axios
      .get(
        `https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/galleries?type=infografis&perpage=8&page=${parsed.page}`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        const { data } = result
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  buttonGroup(start, end, current = 1) {
    let endPage = current + 4 < end ? current + 4 : end

    let startPage = current
    startPage = endPage - startPage < 5 ? endPage - 4 : startPage
    startPage = startPage < 0 ? 1 : startPage

    const key = "page"

    const list = []
    for (let i = startPage; i <= endPage; i++) {
      if (i == current) {
        list.push(
          <Button id={i} variant="contained" color="primary">
            {i}
          </Button>
        )
      } else {
        list.push(
          <Button id={i} href={`?${key}=${i}`}>
            {i}
          </Button>
        )
      }
    }

    /* first & prev navigation */
    if (current > 1) {
      const prev = start - 1 < 1 ? 1 : start - 1
      list.unshift(
        <Button id="prev" href={`?${key}=${prev}`}>
          &lt;
        </Button>
      )
      list.unshift(
        <Button id="first" href={`?${key}=1`}>
          &lt;&lt;
        </Button>
      )
    }

    /* next & last navigation */
    if (current < end) {
      const next = start + 1 > end ? end : start + 1
      list.push(
        <Button id="next" href={`?${key}=${next}`}>
          &gt;
        </Button>
      )
      list.push(
        <Button id="last" href={`?${key}=${end}`}>
          &gt;&gt;
        </Button>
      )
    }

    return list
  }

  

  render() {
    const { dataJson } = this.state

    
    function download(e, id) {
      e.preventDefault();
      let downloadUrl = `https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/gallery/${id}?type=infografis&download=1`;
      console.log('Download Image : '+ downloadUrl);
      window.open(downloadUrl);
    }

    return (
      <Wrapper>
        <Layout
          noGrid
          siteTitle="Infografis"
          siteDescription="Infografis Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
        >
          <StyledGrid
            container
            justify="center"
            alignContent="center"
            spacing={2}
            style={{ marginTop: "0px", minHeight: "500px" }}
          >
            <Grid item xs={12}>
              <h1>Infografis</h1>
            </Grid>

            <Grid item xs={12}>
              <p>
                Infografik adalah representasi visual informasi, data atau ilmu
                pengetahuan secara grafis. Grafik ini memperlihatkan informasi
                rumit dengan singkat dan jelas, seperti pada papan, peta,
                jurnalisme, penulisan teknis, dan pendidikan. Melalui
                infografik, ilmuwan komputer, matematikawan dan statistikawan
                mampu mengembangkan dan mengomunikasikan konsep menggunakan satu
                simbol untuk memproses informasi.
              </p>
            </Grid>

            <Grid item>
              <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={1}>
                    {!!dataJson &&
                      dataJson.data.map(data => {
                        return (
                          <Grid item xs={12} md={4}>
                            <ImageContainer href={data.image} data-fancybox="" data-caption={data.title}>
                              <div style={{ height: "350px", position:"relative" }}>
                                <img
                                  src={data.image}
                                  width="100%"
                                  height="100%"
                                  alt="pusdatin"
                                />
                                <a style={{ position:"absolute", bottom:"5px", right:"5px", display:"none" }}
                                  onClick={ (e) => download(e, data.id) }>
                                  <FontAwesomeIcon
                                    icon={faDownload}
                                    size="3x"
                                    style={{
                                      marginBottom: "8px",
                                      color: "#fafafa",
                                    }}
                                  />
                                </a>
                              </div>
                              
                            </ImageContainer>
                          </Grid>
                        )
                      })}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SearchForm />
                  <h3>Berita Populer</h3>
                  <PopularNews />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              xs={12}
              style={{ marginTop: "1rem" }}
              justify="center"
            >
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
                variant="outlined"
              >
                {!!dataJson &&
                  this.buttonGroup(
                    dataJson.current_page,
                    dataJson.last_page,
                    dataJson.current_page
                  )}
              </ButtonGroup>
            </Grid>
          </StyledGrid>
        </Layout>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}

export default InfografisPage
