import React from "react"
import axios from "axios"
import { Link } from "@reach/router"
import MediaQuery from "react-responsive"
import PageContainer from "../layouts/PageContainer"

import Layout from "../layouts/Layout"
import styled from "styled-components"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"
import HotNews from "../components/HotNews"
import PopularNews from "../components/PopularNews"
import SearchForm from "../components/SearchForm"

import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const NewsCard = styled(Card)`
  width: 100%;
  padding: 16px;

  & :hover {
    background-color: #f0f0f0;
  }
`

class BeritaPage extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
    page: 1,
    search: false,
  }

  fetchData = () => {
    this.setState({ loading: true })

    const queryString = require("query-string")
    const parsed = queryString.parse(this.props.location.search)
    const keyword = parsed.keyword

    if (keyword !== "" && keyword !== undefined) {
      this.setState({ loading: true, search: true })
    }

    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news?perpage=6&page=${parsed.page}`, {
        crossdomain: true,
      })
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
    const daftarBerita = !!dataJson && dataJson.data

    return (
      <Wrapper>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
          <Layout
            siteTitle="Berita"
            siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
            mobileView
          >
            <Grid container spacing={1} direction="column">
              <Grid item>
                <SearchForm />
              </Grid>
              <Grid item>
                <HotNews />
              </Grid>
              <Grid item>
                <h2>Berita Populer</h2>
              </Grid>
              <Grid item>
                <PopularNews />
              </Grid>
            </Grid>
          </Layout>
        </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
          <Layout
            // noPageContainer
            noMargin
            siteTitle="Berita"
            siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
          >
            <PageContainer>
              <Grid
                container
                direction="column"
                style={{ minHeight: "500px", marginBottom: "25px" }}
              >
                <Grid item xs>
                  <h2>Berita dan Informasi</h2>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item md={8}>
                      <Grid container spacing={2} direction="column">
                        <Grid item>
                          <HotNews />
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={2}>
                            {!!daftarBerita &&
                              daftarBerita.map(berita => {
                                return (
                                  <Grid item key={berita.id} md={6}>
                                    <Link
                                      to={`news/${berita.id}`}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <NewsCard style={{ height: "100%" }}>
                                        <Grid
                                          container
                                          spacing={1}
                                          direction="column"
                                        >
                                          {!!berita.image && (
                                            <Grid item>
                                              <img
                                                src={berita.image}
                                                width="100%"
                                                height="180px"
                                                alt="berita-pusdatin"
                                              />
                                            </Grid>
                                          )}
                                          <Grid item>
                                            <h3>{berita.title}</h3>
                                          </Grid>
                                          <Grid item>
                                            <Grid container>
                                              <Grid item style={{ flex: 1 }}>
                                                <Typography
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  {new Date(
                                                    berita.created_at
                                                  ).toLocaleDateString("id-ID")}
                                                </Typography>
                                              </Grid>
                                              <Grid item>
                                                <Typography
                                                  style={{ fontWeight: "bold" }}
                                                >{`Telah dibaca: ${berita.seen} kali`}</Typography>
                                              </Grid>
                                            </Grid>
                                          </Grid>
                                          <Grid item>
                                            <p>
                                              {berita.content
                                                .replace(/(<([^>]+)>)/gi, "")
                                                .substring(0, 150)}{" "}
                                              ...
                                            </p>
                                          </Grid>
                                        </Grid>
                                      </NewsCard>
                                    </Link>
                                  </Grid>
                                )
                              })}
                          </Grid>
                        </Grid>
                      </Grid>
                      
                      <Grid
                        item
                        container
                        xs={12}
                        style={{ marginTop: "2rem" }}
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
                    </Grid>
                    <Grid item md={4}>
                      <SearchForm />
                      <h3>Berita Populer</h3>
                      <PopularNews />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </PageContainer>
          </Layout>
        </MediaQuery>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}
export default BeritaPage
