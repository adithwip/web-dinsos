import React from "react"
import styled from "styled-components"

import Layout from "../layouts/Layout"

import BannerSection from "../components/BannerSection"
import BeritaSection from "../components/BeritaSection"
import KontakSection from "../components/KontakSection"
import GallerySection from "../components/GallerySection"
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
        siteTitle="Pusdatin Jamsos"
        siteDescription="Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
      ></Layout>
      <BannerSection />
      <BeritaSection />
      <GallerySection />
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

export default IndexPage
