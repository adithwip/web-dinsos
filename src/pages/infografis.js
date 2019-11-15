import React from "react"
import axios from "axios"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

import { Carousel } from "react-responsive-carousel"
import Card from "@material-ui/core/Card"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import BackgroundImage from "gatsby-background-image"

// const StyledPaper = styled(Paper)`
//   padding: 32px 16px;
// `

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`

class InfografisPage extends React.Component {
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
        `http://104.43.9.40:8089/api/v1/cms/galleries?type=infografis`,
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
          style={{ marginTop: "0px" }}
        >
          <Grid item xs={12}>
            <h2>Infografis</h2>
          </Grid>

          <Grid item xs={12}>
            <p>
              Infografik adalah representasi visual informasi, data atau ilmu
              pengetahuan secara grafis. Grafik ini memperlihatkan informasi
              rumit dengan singkat dan jelas, seperti pada papan, peta,
              jurnalisme, penulisan teknis, dan pendidikan. Melalui infografik,
              ilmuwan komputer, matematikawan dan statistikawan mampu
              mengembangkan dan mengomunikasikan konsep menggunakan satu simbol
              untuk memproses informasi.
            </p>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            {!!dataJson &&
              dataJson.map(data => {
                return (
                  <Grid item xs={12} sm={4} md={3}>
                    <a href={data.url} target={"_blank"}>
                      <div style={{ height: "350px" }}>
                        <img src={ data.image } width="100%" height="100%" />
                        {/* <p className="legend">{data.title}</p> */}
                      </div>
                    </a>
                  </Grid>
                )
              })}
          </Grid>
        </StyledGrid>
      </Layout>
    )
  }
}

export default InfografisPage
