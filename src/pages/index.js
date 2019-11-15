import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"

import Layout from "../layouts/Layout"

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
      ></Layout>
      <BeritaSection />
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default IndexPage
