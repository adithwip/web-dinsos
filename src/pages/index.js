import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

import Layout from "../layouts/Layout"
import DataPKHChart from "../components/charts/DataPKHChart"
import DataPetugasP3SChart from "../components/charts/DataPetugasP3SChart"

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`

const StyledCard = styled(Card)`
  background-color: rgba(248, 255, 229, 0.5);
  opacity: 0.8;
  padding: 8px;
  height: 140px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const IndexPage = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }

        jakartaMap: file(relativePath: { eq: "images/jakarta-maps.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Layout
      noGrid
      siteTitle="Pusdatin Dinsos"
      siteDescription="Pusat Data & Informasi Dinas Sosial Provinsi DKI Jakarta"
    >
      <h2>Pusat Data & Informasi Dinas Sosial Provinsi DKI Jakarta</h2>
      <StyledGrid
        container
        justify="center"
        alignContent="center"
        alignItems="flex-start"
        spacing={2}
        style={{ marginTop : "0px" }}
      >
      
        <Grid item xs={4} spacing={0} style={{ textAlign: "left" }}>
          <Img fixed={data.jakartaMap.childImageSharp.fixed} />
        </Grid>
        <Grid item xs={8} style={{ textAlign: "left"}}>
            <h3>Data Fakir Miskin & Orang Tidak Mampu (FMOTM) DKI Jakarta</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPetugasP3SChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPetugasP3SChart />
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <DataPetugasP3SChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <DataPKHChart />
        </Grid>
      </StyledGrid>
    </Layout>
  )
}

export default IndexPage