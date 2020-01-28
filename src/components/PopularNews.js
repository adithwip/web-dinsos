import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { Link } from "@reach/router"

import { shuffleArray } from "../utils/functions"

const StyledBgImg = styled.div`
  background-image: url(${props => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;

  position: relative;
  width: 84px;
  height: 84px;
`

const StyledNewsContainer = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 6px;
  overflow: hidden;
  /* padding: 8px; */

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  & > a:hover {
    text-decoration: none;
  }
`

const NewsContainer = props => {
  const { imgSrc, title, newsId } = props
  // const locationOrigin = window.location.origin

  return (
    <StyledNewsContainer>
      <Link to={`/news/${newsId}`}>
        <Grid container alignContent="center" alignItems="center">
          <Grid item>
            <StyledBgImg imgSrc={imgSrc} />
          </Grid>
          <Grid item style={{ flex: 1, padding: '0 16px' }}>
            <Typography style={{ color: "black" }}>{title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </StyledNewsContainer>
  )
}

class PopularNews extends React.Component {
  state = {
    dataPopNews: null,
    loading: false,
    error: false,
  }

  fetchDataNewsPopular = () => {
    this.setState({ loading: true })
    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news?order_by=seen`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result
        this.setState({
          dataPopNews: data,
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
    this.fetchDataNewsPopular()
  }

  render() {
    const { dataPopNews } = this.state
    const { maxNews } = this.props
    const dataPopNewsShuffle = dataPopNews && shuffleArray(dataPopNews.data)
    let dataPopNewstoRender = []

    if (dataPopNews && dataPopNews.total > 10) {
      if (maxNews != null) {
        dataPopNewsShuffle.forEach((data, index) => {
          if (index < maxNews) {
            dataPopNewstoRender.push(data)
          }
        })
      } else {
        dataPopNewsShuffle.forEach((data, index) => {
          if (index < 10) {
            dataPopNewstoRender.push(data)
          }
        })
      }
    } else {
      dataPopNewstoRender = dataPopNews && dataPopNewsShuffle
    }

    return (
      <Grid container spacing={2} direction="column">
        {dataPopNewstoRender != null &&
          dataPopNewstoRender.map(news => {
            return (
              <Grid item key={news.id}>
                <NewsContainer
                  imgSrc={news.image}
                  title={news.title}
                  newsId={news.id}
                />
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default PopularNews
