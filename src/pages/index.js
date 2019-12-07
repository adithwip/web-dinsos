import React from "react"
import styled from "styled-components"

import Layout from "../layouts/Layout"

import BannerSection from "../components/BannerSection"
import StickyPostContainer from "../components/StickyPostContainer"
import BeritaSection from "../components/BeritaSection"
import GallerySection from "../components/GallerySection"
import SummarySection from "../components/SummarySection"
import GaleriAplikasi from "../components/GaleriAplikasi"
import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const IndexPage = () => {
  return (
    <Wrapper>
      <Layout
        noGrid
        noMargin
        siteTitle="Pusdatin Jamsos"
        siteDescription="Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
      ></Layout>
      <BannerSection id="banner" />
      <StickyPostContainer id="sticky" />
      <SummarySection id="summary" />
      <BeritaSection id="berita" />
      <GallerySection id="galeri" />
      <GaleriAplikasi id="apps" />
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default IndexPage
