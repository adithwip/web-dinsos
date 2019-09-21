import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/Layout"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`

const StyledCard = styled(Card)`
  background-color: #f8ffe5;
  padding: 8px;
  height: 140px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const DataPage = () => {
  return (
    <Layout
      noGrid
      siteTitle="Data Page"
      siteDescription="Menu pusat data dinas sosial DKI Jakarta"
    >
      <StyledGrid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={6} sm={6} md={3}>
          <Link to="/data/data-pkh">
            <StyledCard>
              <Grid
                style={{ height: "100%" }}
                container
                direction="column"
                justify="center"
              >
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant="button">Data PKH</Typography>
                </Grid>
              </Grid>
            </StyledCard>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Link to="/data/data-petugas-p3s">
            <StyledCard>
              <Grid
                style={{ height: "100%" }}
                container
                direction="column"
                justify="center"
              >
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant="button">Data Petugas P3S</Typography>
                </Grid>
              </Grid>
            </StyledCard>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Link to="/data/data-lokasi-rawan-pmks">
            <StyledCard>
              <Grid
                style={{ height: "100%" }}
                container
                direction="column"
                justify="center"
              >
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant="button">
                    Data Lokasi Rawan PMKS
                  </Typography>
                </Grid>
              </Grid>
            </StyledCard>
          </Link>
        </Grid>
      </StyledGrid>
    </Layout>
  )
}

export default DataPage
