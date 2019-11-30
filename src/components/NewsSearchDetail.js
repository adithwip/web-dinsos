import React from "react"
import axios from "axios"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"

import { Link } from "@reach/router"

import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"
import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

const BASE_URL = `http://104.43.9.40:8089/api/v1/cms/news`

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
  /* max-width: 420px; */
  height: 284px;
`

const StyledNewsContainer = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 8px;
  max-width: 380px;
  /* height: 200px; */

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const NewsContainer = props => {
  const { imgSrc, title, newsId, body } = props
  // const locationOrigin = window.location.origin

  return (
    <StyledNewsContainer>
      <Link to={`/news/${newsId}`}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <StyledBgImg imgSrc={imgSrc} />
          </Grid>
          <Grid item>
            <Typography style={{ color: "black", fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <p style={{ color: "black" }}>
              {body.replace(/(<([^>]+)>)/gi, "").substring(0, 150)} ...
            </p>
          </Grid>
        </Grid>
      </Link>
    </StyledNewsContainer>
  )
}

class NewsSearchDetail extends React.Component {
  state = {
    data: null,
    loading: false,
    error: false,
  }

  fetchData = () => {
    const { id } = this.props
    this.setState({ loading: true })
    axios
      .get(`${BASE_URL}/?keyword=${id}`, { crossdomain: true })
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
    const { id } = this.props
    const dataNews = data && data.data
    return (
      <Wrapper>
        <Layout siteType="article" siteDescription="Pencarian berita">
          <h1>
            {`Hasil Pencarian Berdasarkan Keyword: `}
            <span style={{ color: "#0D47A1" }}>
              <u>{`${id}`}</u>
            </span>
          </h1>
          <Grid container spacing={2}>
            {dataNews && dataNews.length > 0 ? (
              dataNews.map(a => {
                return (
                  <Grid item md={4}>
                    <NewsContainer
                      imgSrc={a.image}
                      title={a.title}
                      newsId={a.id}
                      body={a.content}
                    />
                  </Grid>
                )
              })
            ) : (
              <p>Hasil pencarian kosong</p>
            )}
          </Grid>
        </Layout>
      </Wrapper>
    )
  }
}

export default NewsSearchDetail
