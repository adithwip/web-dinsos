import React from "react"
import axios from "axios"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"
import Surface from "../components/Surface"
import PopularNews from "./PopularNews"
import SocialMediaSharingButtons from "./SocialMediaSharingButtons"
import SearchForm from "./SearchForm"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

const BASE_URL = `http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledBgImg = styled.div`
  background-image: url(${props => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;

  position: relative;
  width: 100%;
  height: 400px;
`

class NewsDetail extends React.Component {
  state = {
    data: null,
    loading: false,
    error: false,
  }

  fetchData = () => {
    const { id } = this.props
    this.setState({ loading: true })
    axios
      .get(`${BASE_URL}/${id}`, { crossdomain: true })
      .then(result => {
        const { data } = result
        this.setState({
          data: data,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error,
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillReceiveProps(props) {
    this.fetchData()
  }

  render() {
    const { data } = this.state
    const news = data && data.data

    return (
      <Wrapper>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
          <Layout
            siteType="article"
            siteDescription={data && news.title}
            mobileView
          >
            {data != null ? (
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <h1>{news.title}</h1>
                </Grid>
                <Grid item>
                  <StyledBgImg imgSrc={news.image} />
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item style={{ flex: 1 }}>
                      <p style={{ color: "#1CA086" }}>{news.created_at}</p>
                    </Grid>
                    <Grid item style={{ flex: 1 }}>
                      <SocialMediaSharingButtons />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <div dangerouslySetInnerHTML={{ __html: news.content }} />
                </Grid>
              </Grid>
            ) : (
              <div>Sedang Memuat Berita...</div>
            )}
          </Layout>
        </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
          <Layout
            // siteTitle={post.frontmatter.title}
            siteType="article"
            // mobileFirst
            // siteUrl={url}
            // siteImage={image}
            siteDescription={data && news.title}
          >
            {data != null ? (
              <Grid container spacing={4} style={{ margin: "16px 0" }}>
                <Grid item md={8}>
                  <Surface>
                    <Grid container direction="column">
                      <Grid item>
                        <h1 style={{ marginTop: 0 }}>{news.title}</h1>
                      </Grid>
                      <Grid item>
                        {/* <img src={news.image} alt="pusdatin" /> */}
                        <StyledBgImg imgSrc={news.image} />
                      </Grid>
                      <Grid item style={{ marginTop: "32px" }}>
                        <Grid container>
                          <Grid item style={{ flex: 1 }}>
                            <p style={{ color: "#1CA086" }}>
                              {news.created_at}
                            </p>
                          </Grid>
                          <Grid item style={{ flex: 1 }}>
                            <SocialMediaSharingButtons />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <div
                          dangerouslySetInnerHTML={{ __html: news.content }}
                        />
                      </Grid>
                    </Grid>
                  </Surface>
                </Grid>
                <Grid item md={4}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <SearchForm />
                      <h3>Berita Populer</h3>
                    </Grid>
                    <Grid item>
                      <PopularNews maxNews={5} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <div>Sedang Memuat Berita...</div>
            )}
          </Layout>
        </MediaQuery>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}

export default NewsDetail
