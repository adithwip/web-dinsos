import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const StyleContainer = styled(Grid)`
  padding: 0 32px;
  margin-bottom: 12px;
`

const GallerySection = () => {
  return (
    <StyleContainer style={{ marginTop: "10px", marginBottom: "40px" }}>
      <h2>Galeri</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://s3.ap-south-1.amazonaws.com/zoomin-new/live-product/prints_4x4/1.0.0/product_images/web/detail-2.jpg"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://www.innonthesquare.com/resourcefiles/mobilehomeimages/inn-on-the-square-falmouth-massachusetts-mobile.jpg"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://s3-eu-west-1.amazonaws.com/brussels-images/content/gallery/visit/place/Square-du-Petit-Sablon_f8403e6b1dfadb4762d84ebb53b717fc21a4dc20_sq_640.jpg"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://images.glaciermedia.ca/polopoly_fs/1.23969082.1573753246!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/st-andrews-on-square.jpg"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100438673_wh_68"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            alt="galeri-pusdatin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGu4oESzphf0FBslV2MEwCsHItKOBP0YfEQzlxkkSx_V4Ap2Zb&s"
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </StyleContainer>
  )
}

export default GallerySection
