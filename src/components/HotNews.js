import React from "react"
import axios from "axios"
import { Link } from "@reach/router"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const StyledBgImg = styled.div`
  /* Location of the image */
  background-image: url(${props => props.imgSrc});

  /* Image is centered vertically and horizontally at all times */
  background-position: center center;

  /* Image doesn't repeat */
  background-repeat: no-repeat;

  /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
  /* background-attachment: fixed; */

  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;

  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color: #464646;

  position: relative;
  width: 100%;
  min-height: ${props => props.minHeight || 300}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  overflow: hidden;
`

const NewsDetailSection = styled.div`
  width: 100%;
  max-height: 140px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  justify-content: center;
  /* align-items: center; */

  background-color: rgba(1, 4, 4, 0.7);
  color: white;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

const LinkedStyledBgImg = ({
  imgSrc,
  minHeight,
  title,
  newsId,
  newsCategory,
}) => {
  return (
    <StyledBgImg imgSrc={imgSrc} minHeight={minHeight}>
      <NewsDetailSection>
        <Link to={`news/${newsId}`}>
          <Typography style={{ color: "white", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Link>
        <div>
          <Typography variant="overline">
            {`Category: ${newsCategory}`}
          </Typography>
        </div>
      </NewsDetailSection>
    </StyledBgImg>
  )
}

class HotNews extends React.Component {
  state = {
    dataNews: null,
    error: false,
    loading: false,
  }

  fetchDataNewsChosen = () => {
    this.setState({ loading: true })
    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news?chosen=true`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result
        this.setState({ dataNews: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchDataNewsChosen()
  }

  render() {
    const { dataNews } = this.state
    let dataNewsToRender = []

    if (dataNews && dataNews.total > 4) {
      dataNews.data.forEach((data, index) => {
        if (index < 4) {
          dataNewsToRender.push(data)
        }
      })
    } else {
      dataNewsToRender = dataNews && dataNews.data
    }

    if (dataNewsToRender != null) {
      return (
        <>
          <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
            <Carousel
              autoPlay
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              dynamicHeight
              emulateTouch
            >
              {dataNewsToRender.map(news => {
                return (
                  <div key={news.id}>
                    <LinkedStyledBgImg
                      imgSrc={news.image}
                      title={news.title}
                      newsId={news.id}
                      newsCategory={news.category}
                    />
                  </div>
                )
              })}
            </Carousel>
          </MediaQuery>

          <MediaQuery minDeviceWidth={768}>
            <Grid container spacing={2}>
              {/* Big News */}
              <Grid item md={12}>
                <LinkedStyledBgImg
                  imgSrc={dataNewsToRender[0].image}
                  minHeight={400}
                  title={dataNewsToRender[0].title}
                  newsId={dataNewsToRender[0].id}
                  newsCategory={dataNewsToRender[0].category}
                />
              </Grid>
              {/* Sub-big News */}
              {dataNewsToRender.map((news, index) => {
                if (index !== 0) {
                  return (
                    <Grid item md={4}>
                      <LinkedStyledBgImg
                        imgSrc={news.image}
                        title={news.title}
                        newsId={news.id}
                        newsCategory={news.category}
                      />
                    </Grid>
                  )
                }
              })}
            </Grid>
          </MediaQuery>
        </>
      )
    } else {
      return null
    }
  }
}

export default HotNews
