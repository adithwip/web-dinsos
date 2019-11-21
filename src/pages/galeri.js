import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

class GaleriPage extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      // .get(
      //   `http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/galleries`,
      //   {
      //     crossdomain: true,
      //   }
      // )
      .get(
        `http://104.43.9.40:8089/api/v1/cms/galleries?type=galeri`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        const { data } = result.data
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state
    let sourceUrl = "http://siaplus.pusdatin-dinsos.jakarta.go.id/"

    return (
      <Wrapper>
      <Layout
        noGrid
        siteTitle="Galeri | Pusdatin Jamsos"
        siteDescription="Galeri Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
      >
        <StyledGrid
          container
          justify="center"
          alignContent="center"
          spacing={2}
          style={{ marginTop: "0px" }}
        >
          <Grid item xs={12}>
            <h2>Galeri</h2>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            {!!dataJson &&
              dataJson.map(data => {
                return (
                  <Grid item xs={12} sm={4} md={2}>
                    <a href={data.url} target={"_blank"}>
                      <div style={{ height: "165px" }}>
                        <img src={ data.image } width="100%" height="100%" />
                      </div>
                    </a>
                  </Grid>
                )
              })}
          </Grid>
        </StyledGrid>
      </Layout>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}

export default GaleriPage
