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

import CustomChart from "../components/charts/CustomChart"
import CustomChart2 from "../components/charts/CustomChart2"
import FMOTMByGenderChart from "../components/charts/fmotm/FMOTMByGenderChart"
import FMOTMByAgeChart from "../components/charts/fmotm/FMOTMByAgeChart"

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }
`

// const StyledCard = styled(Card)`
//   background-color: rgba(248, 255, 229, 0.5);
//   opacity: 0.8;
//   padding: 8px;
//   height: 140px;

//   &:hover {
//     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//   }
// `

const IndexPage = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }

  //       jakartaMap: file(relativePath: { eq: "images/jakarta-maps-01.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 200) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <Layout
      noGrid
      siteTitle="Pusdatin Jamsos"
      siteDescription="Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
    >
      <h2>
        Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI
        Jakarta
      </h2>
      <StyledGrid
        container
        justify="center"
        alignContent="center"
        alignItems="flex-start"
        spacing={2}
        style={{ marginTop: "0px" }}
      >
        <Grid item xs={12} md={12} style={{ textAlign: "left" }}>
          <h3>Data Fakir Miskin & Orang Tidak Mampu (FMOTM) DKI Jakarta</h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomChart title="Sebaran FMOTM berdasarkan Wilayah" />
          <br />
          <CustomChart2 />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d507680.95838321565!2d106.829518!3d-6.229746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1570862418475!5m2!1sen!2sus"
            width="100%"
            height="380"
            frameBorder="0"
          ></iframe> */}
          <FMOTMByGenderChart />
          <br />
          <FMOTMByAgeChart />
        </Grid>

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
  )
}

export default IndexPage
