import React from "react"

import Grid from "@material-ui/core/Grid"

import CardMenu from "../components/CardMenu"
import ImageCarouselCard from "../components/ImageCarouselCard"
import Layout from "../layouts/Layout"

const IndexPage = () => {
  const upperMenu = (
    <Grid item style={{ width: "100%" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={4}>
          <ImageCarouselCard />
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <CardMenu menu="kontak" to="/about" />
            </Grid>
            <Grid item>
              <CardMenu
                menu="lks"
                href="https://rasetprojects.com/pusdatin/home_grafik.html"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <CardMenu menu="pusat-berita" to="/blog" />
            </Grid>
            <Grid item>
              <CardMenu menu="struktur-organisasi" to="/blog" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

  const lowerMenu = (
    <Grid item style={{ width: "100%" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={6} md={3}>
          <CardMenu menu="lpse" href="http://lpse.jakarta.go.id/eproc/" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardMenu menu="jakarta" href="http://smartcity.jakarta.go.id/" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardMenu menu="open-data" href="http://data.jakarta.go.id/" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardMenu menu="lpse" to="/about" />
        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <Layout
      noGrid
      siteTitle="Blog Page"
      siteDescription="Blog Page of Dinas Sosial DKI Jakarta"
    >
      <Grid
        container
        direction="column"
        style={{ margin: "64px auto", width: "100%" }}
        justify="center"
        alignContent="center"
        alignItems="center"
        spacing={4}
      >
        {upperMenu}
        {lowerMenu}
      </Grid>
    </Layout>
  )
}

export default IndexPage
