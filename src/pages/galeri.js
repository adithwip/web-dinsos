import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class GaleriPage extends React.Component {
  state = {
    dataJsonPhoto: null,
    dataJsonVideo: null,
    error: false,
    loading: false,
  }

  fetchData = () => {

    this.setState({ loading: true })
    // console.log('DEBUG--', this.props.location.search)
    //=> '?foo=bar'
    const queryString = require('query-string');
    const parsed = queryString.parse(this.props.location.search);
    

    axios
      .get(
        `http://104.43.9.40:8089/api/v1/cms/galleries?type=galeri&perpage=18&page=${parsed.ppg}`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        this.setState({ dataJsonPhoto: result.data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })

    axios
      .get(`http://104.43.9.40:8089/api/v1/cms/links?type=video&perpage=6&page=${parsed.vpg}`, {
        cossdomain: true,
      })
      .then(result => {
        this.setState({ dataJsonVideo: result.data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }
  

  buttonGroup(start, end, current = 1, type='photo') {

      let endPage = (current + 4 < end) ? (current +  4) : end
 
      let startPage = current
      startPage = (endPage - startPage < 5) ? endPage - 4 : startPage
      startPage = startPage < 0 ? 1 : startPage
      
      const key = (type === 'photo') ? 'ppg' : 'vpg'

      const list = []
      for (let i = startPage; i <= endPage; i++) {            
          if(i == current) {
              list.push(<Button id={i} variant="contained" color="primary">{i}</Button>)
          } else {
              list.push(<Button id={i} href={`?${key}=${i}`}>{i}</Button>)
          }
      }

      // if (list.length == 0) {
      //   list.push(<Button id={ current } variant="contained" color="primary">{current}</Button>)
      // }

      /* first & prev navigation */
      if (current > 1) {
        const prev = start - 1 < 1 ? 1 : start - 1
        list.unshift(<Button id="prev" href={`?${key}=${prev}`}>&lt;</Button>)
        list.unshift(<Button id="first" href={`?${key}=1`}>&lt;&lt;</Button>)
      }
      
      /* next & last navigation */
      if (current < end) {
        const next = start + 1 > end ? end : start + 1
        list.push(<Button id="next" href={`?${key}=${ next }`}>&gt;</Button>)
        list.push(<Button id="last" href={`?${key}=${end}`}>&gt;&gt;</Button>)
      }

      return list
  }

  render() {
    const { dataJsonPhoto, dataJsonVideo, error, loading } = this.state
    let sourceUrl = "http://siaplus.pusdatin-dinsos.jakarta.go.id/"

    return (
      <Wrapper>
        <Layout
          noGrid
          siteTitle="Galeri | Pusdatin Jamsos"
          siteDescription="Galeri Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
        >
          <Grid item xs={12}>
            <h2>Galeri Foto</h2>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            {!!dataJsonPhoto &&
              (dataJsonPhoto.data).map(data => {
                return (
                  <Grid item xs={12} sm={4} md={3} lg={2}>
                    <a href={data.url} target={"_blank"}>
                      <div style={{ height: "165px" }}>
                        <img src={data.image} width="100%" height="100%" />
                      </div>
                    </a>
                  </Grid>
                )
              })}
          </Grid>

          <Grid item container xs={12} style={{ marginTop:"1rem" }} justify="center">
            <ButtonGroup size="small" aria-label="small outlined button group" variant="outlined" >
                { !!dataJsonPhoto && 
                    this.buttonGroup(dataJsonPhoto.current_page, dataJsonPhoto.last_page, dataJsonPhoto.current_page,'photo') 
                }
            </ButtonGroup>
          </Grid>

          <Grid item xs={12}>
            <h2>Galeri Video</h2>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            {!!dataJsonVideo &&
              (dataJsonVideo.data).map(data => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    {this.convertPlaceholderVideo(data)}
                  </Grid>
                )
              })}
          </Grid>
          
          <Grid item container xs={12} style={{ margin:"1rem 0" }} justify="center">
            <ButtonGroup size="small" aria-label="small outlined button group" variant="outlined" >
                { !!dataJsonVideo && 
                    this.buttonGroup(dataJsonVideo.current_page, dataJsonVideo.last_page, dataJsonVideo.current_page, 'video') 
                }
            </ButtonGroup>
          </Grid>

        </Layout>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }

  convertPlaceholderVideo(data) {
    if (data.url.search("youtube.com/embed") !== -1) {
      return (
        <iframe
          title={data.title}
          width="100%"
          height="350px"
          src={data.url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )
    }

    return (
      <a
        href={data.url}
        title={data.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.image}
          alt={data.title}
          style={{ width: "100%", height: "350px" }}
        />
      </a>
    )
  }
}

export default GaleriPage
