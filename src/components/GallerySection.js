import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
  padding: 0 32px;
  margin-bottom: 12px;
`
class GallerySection extends React.Component {
  
  state = { dataJsonPhoto: null, dataJsonVideo: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(
        `http://104.43.9.40:8089/api/v1/cms/galleries?type=galeri&perpage=6`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        const { data } = result.data
        this.setState({ dataJsonPhoto: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
      
    axios
    .get(`http://104.43.9.40:8089/api/v1/cms/links?type=video&perpage=3`, { cossdomain: true, })
    .then(result => {
      const { data } = result.data
      this.setState({ dataJsonVideo: data, loading: false })
    })
    .catch(error => {
      this.setState({ loading: false, error: error })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJsonPhoto, dataJsonVideo, error, loading } = this.state
  
    return (
      <StyleContainer style={{ marginTop:"10px", marginBottom:"40px" }}>
        <h2>Galeri Foto & Video</h2>
        <Grid container spacing={2}>
          {!!dataJsonPhoto &&
            dataJsonPhoto.map(data => {
              return (
                <Grid item xs={12} md={2}>
                  <a href={data.url} target={"_blank"}>
                    <img src={data.image} width="100%" height="100%" />
                  </a>
                </Grid>
              )
            })}
        </Grid>
        <Grid container spacing={2}>
          {/* {!!dataJsonVideo && dataJsonVideo.map(data => {
              return ( */}
                <Grid item xs={12} md={4}>
                  <iframe width="100%" height="350px" src="https://www.youtube.com/embed/QKsHEN1Oylg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
                <Grid item xs={12} md={4}>
                  <iframe width="100%" height="350" src="https://www.youtube.com/embed/GSzfRoEBHDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
              {/* )
          })} */}
        </Grid>
        <Grid container item xs={12} justify="center"> 
          <Link to="/galeri">      
            <Button variant="contained"  color="secondary" style={{ margin: "35px 0 0 20px" }}>
              Lihat Lainnya &gt;&gt;
            </Button>
          </Link>
        </Grid>
      </StyleContainer>
    )
  }
}

export default GallerySection
