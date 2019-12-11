import React from "react"
import styled from "styled-components"

import Layout from "../../layouts/Layout"
import Grid from "@material-ui/core/Grid"

import FMOTMByWilayahChart from "../../components/charts/fmotm/FMOTMByWilayahChart"
import FMOTMByBantuanChart from "../../components/charts/fmotm/FMOTMByBantuanChart"
import FMOTMByGenderChart from "../../components/charts/fmotm/FMOTMByGenderChart"
import FMOTMByAgeChart from "../../components/charts/fmotm/FMOTMByAgeChart"

import KontakSection from "../../components/KontakSection"
import Footer from "../../components/Footer"

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

const DataUepkube = () => {
  return (
    <Wrapper>
      <Layout
        noGrid
        siteTitle="Data FMOTM | Pusdatin Jamsos"
        siteDescription="Data LKS Pusdatin Jamsos Dinas Sosial Provinsi DKI Jakarta"
      >
        <StyledGrid
          container
          justify="center"
          alignContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ marginTop: "0px" }}
        >
          <Grid item xs={12} md={12} style={{ textAlign: "left" }}>
            <h3>Data UEP-KUBE Provinsi DKI Jakarta</h3>
          </Grid>
        </StyledGrid>
      </Layout>
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default DataUepkube
