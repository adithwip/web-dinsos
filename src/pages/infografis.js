import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"
// import ImageCarouselCard from "../components/ImageCarouselCard"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`

const InfografisPage = () => (
  <Layout
    noGrid
    siteTitle="Pusdatin Jamsos"
    siteDescription="Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
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
      <Grid item xs={12} sm={6} md={6}>
        <p>
          Infografik adalah representasi visual informasi, data atau ilmu
          pengetahuan secara grafis. Grafik ini memperlihatkan informasi rumit
          dengan singkat dan jelas, seperti pada papan, peta, jurnalisme,
          penulisan teknis, dan pendidikan. Melalui infografik, ilmuwan
          komputer, matematikawan dan statistikawan mampu mengembangkan dan
          mengomunikasikan konsep menggunakan satu simbol untuk memproses
          informasi.
        </p>
      </Grid>

      {/* <Grid item xs={12} sm={6} md={6}>
                <ImageCarouselCard />
            </Grid> */}
    </StyledGrid>
  </Layout>
)

export default InfografisPage
