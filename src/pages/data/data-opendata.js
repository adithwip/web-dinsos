import React from "react"
import styled from "styled-components"

import Layout from "../../layouts/Layout"
import Grid from "@material-ui/core/Grid"

import DataPKHChart from "../../components/charts/DataPKHChart"
import DataPetugasP3SChart from "../../components/charts/DataPetugasP3SChart"
import DataPendampingPKHChart from "../../components/charts/DataPendampingPKHChart"
import DataKejadianBencanaChart from "../../components/charts/DataKejadianBencanaChart"
import DataPemulanganOrangTerlantarChart from "../../components/charts/DataPemulanganOrangTerlantarChart"
import DataProgramKegiatanDinsosChart from "../../components/charts/DataProgramKegiatanDinsosChart"
import DataJandaPerintisKemerdekaanChart from "../../components/charts/DataJandaPerintisKemerdekaanChart"
import DataRekapPMKSChart from "../../components/charts/DataRekapPMKSChart"
import DataPusakaChart from "../../components/charts/DataPusakaChart"
import DataTitikRawanPMKSChart from "../../components/charts/DataTitikRawanPMKSChart"
import DataPantiSosialChart from "../../components/charts/DataPantiSosialChart"
import DataFakirMiskinMandiriChart from "../../components/charts/DataFakirMiskinMandiriChart"
import DataLKSChart from "../../components/charts/DataLKSChart"
import DataJumlahTKSKAktifChart from "../../components/charts/DataJumlahTKSKAktifChart"
import DataPresentasiSARPChart from "../../components/charts/DataPresentasiSARPChart"
import DataLokasiBersihPMKSChart from "../../components/charts/DataLokasiBersihPMKSChart"

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

const DataOpendata = () => {
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
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <h3>Open Data Dinas Sosial Provinsi DKI Jakarta</h3>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <DataLokasiBersihPMKSChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPKHChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPendampingPKHChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataKejadianBencanaChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPemulanganOrangTerlantarChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataProgramKegiatanDinsosChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataJandaPerintisKemerdekaanChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataRekapPMKSChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPusakaChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataTitikRawanPMKSChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPetugasP3SChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPantiSosialChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataFakirMiskinMandiriChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataLKSChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataJumlahTKSKAktifChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DataPresentasiSARPChart />
            </Grid>

        </StyledGrid>
      </Layout>
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default DataOpendata
