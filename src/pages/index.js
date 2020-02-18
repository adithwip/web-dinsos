import React from "react"
import styled from "styled-components"

import Layout from "../layouts/Layout"

import BannerSection from "../components/BannerSection"
import PopUpBannerSection from "../components/PopUpBannerSection"
import StickyPostContainer from "../components/StickyPostContainer"
import BeritaSection from "../components/BeritaSection"
import GallerySection from "../components/GallerySection"
import SummarySection from "../components/SummarySection"
import GaleriAplikasi from "../components/GaleriAplikasi"
import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class IndexPage extends React.Component {

  render(){

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

        <PopUpBannerSection />

      </Wrapper>
    )
  }
  
}

export default IndexPage
