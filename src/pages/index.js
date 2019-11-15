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
const StyleContainer = styled(Grid)`
    padding : 0 32px;
    margin-bottom: 12px;
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
      <GaleriSection />
      <KontakSection id="kontak" />
      <Footer background="#0A369D" color="#9E9E9E" />
    </Wrapper>
  )
}

const BannerSection = () => {
  return (
    <div>
      <div style={{ width:'100%', height:'498px', backgroundColor:'#447694' }}>
        <img src="https://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg" width="100%" height="100%" />
      </div>
    </div>
  )
}

const GaleriSection = () => {
  return (
    <StyleContainer style={{ marginTop:"10px", marginBottom:"40px" }}>
      <h2>Galeri</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <img src="https://s3.ap-south-1.amazonaws.com/zoomin-new/live-product/prints_4x4/1.0.0/product_images/web/detail-2.jpg" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="https://www.innonthesquare.com/resourcefiles/mobilehomeimages/inn-on-the-square-falmouth-massachusetts-mobile.jpg" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="https://s3-eu-west-1.amazonaws.com/brussels-images/content/gallery/visit/place/Square-du-Petit-Sablon_f8403e6b1dfadb4762d84ebb53b717fc21a4dc20_sq_640.jpg" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="https://images.glaciermedia.ca/polopoly_fs/1.23969082.1573753246!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/st-andrews-on-square.jpg" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100438673_wh_68" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGu4oESzphf0FBslV2MEwCsHItKOBP0YfEQzlxkkSx_V4Ap2Zb&s" width="100%" height="100%" />
        </Grid>
      </Grid>
    </StyleContainer>
  )
}

export default IndexPage
