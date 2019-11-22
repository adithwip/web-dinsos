import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import MediaQuery from "react-responsive"

const CustomSlider = styled(Slider)`
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
`
const StickyPostContainer = styled(Grid)`
  z-index: 1;
  position: absolute;
  bottom: 0;
  padding: 0 35px;
`
const StickyPost = styled(Grid)`
  border: none;
`

class BannerSection extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://104.43.9.40:8089/api/v1/cms/banners`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: false,
      autoplay: true,
    }

    return (
      <>
        <CustomSlider
          {...settings}
          style={{
            width: "100%",
            height: "480px",
          }}
        >
          {!!dataJson &&
            dataJson.map(data => {
              return (
                <div
                  style={{
                    width: "100%",
                    height: "480px",
                    backgroundColor: "#447694",
                  }}
                >
                  <img src={data.image} width="100%" height="480px" />
                </div>
              )
            })}
        </CustomSlider>

        <MediaQuery minDeviceWidth={768}>
          <StickyPostContainer
            container
            xs
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <StickyPost
              item
              xs={12}
              sm={4}
              style={{
                backgroundColor: "#87cc00",
                padding: "10px",
                color: "#fff",
              }}
            >
              <h3 style={{ marginTop: "0.6rem" }}>Highlight 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </StickyPost>
            <StickyPost
              item
              xs={12}
              sm={4}
              style={{
                backgroundColor: "#fd5308",
                padding: "10px",
                color: "#fff",
              }}
            >
              <h3 style={{ marginTop: "0.6rem" }}>Highlight 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </StickyPost>
            <StickyPost
              item
              xs={12}
              sm={4}
              style={{
                backgroundColor: "#00adef",
                padding: "10px",
                color: "#fff",
              }}
            >
              <h3 style={{ marginTop: "0.6rem" }}>Highlight 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </StickyPost>
          </StickyPostContainer>
        </MediaQuery>
      </>
    )
  }
}

export default BannerSection
