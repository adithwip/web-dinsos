import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"

import Layout from "../layouts/Layout"
import DataPKHChart from "../components/charts/DataPKHChart"
import DataPetugasP3SChart from "../components/charts/DataPetugasP3SChart"
import DataPendampingPKHChart from "../components/charts/DataPendampingPKHChart"
import DataKejadianBencanaChart from "../components/charts/DataKejadianBencanaChart"
import DataPemulanganOrangTerlantarChart from "../components/charts/DataPemulanganOrangTerlantarChart"
import DataProgramKegiatanDinsosChart from "../components/charts/DataProgramKegiatanDinsosChart"
import DataJandaPerintisKemerdekaanChart from "../components/charts/DataJandaPerintisKemerdekaanChart"
import DataRekapPMKSChart from "../components/charts/DataRekapPMKSChart"
import DataPusakaChart from "../components/charts/DataPusakaChart"
import DataTitikRawanPMKSChart from "../components/charts/DataTitikRawanPMKSChart"
import DataPantiSosialChart from "../components/charts/DataPantiSosialChart"
import DataFakirMiskinMandiriChart from "../components/charts/DataFakirMiskinMandiriChart"
import DataLKSChart from "../components/charts/DataLKSChart"
import DataJumlahTKSKAktifChart from "../components/charts/DataJumlahTKSKAktifChart"
import DataPresentasiSARPChart from "../components/charts/DataPresentasiSARPChart"
import DataLokasiBersihPMKSChart from "../components/charts/DataLokasiBersihPMKSChart"

import FMOTMByWilayahChart from "../components/charts/fmotm/FMOTMByWilayahChart"
import FMOTMByBantuanChart from "../components/charts/fmotm/FMOTMByBantuanChart"
import FMOTMByGenderChart from "../components/charts/fmotm/FMOTMByGenderChart"
import FMOTMByAgeChart from "../components/charts/fmotm/FMOTMByAgeChart"

import BeritaSection from "../components/BeritaSection"
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

const IndexPage = () => {
  return (
    <Wrapper>
      <Layout
        noGrid
        siteTitle="Pusdatin Jamsos"
        siteDescription="Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
      >
      
      </Layout>
      <BeritaSection />
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default IndexPage
