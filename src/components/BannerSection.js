import React from "react"
import styled from "styled-components"

import Slider from "react-slick"
import axios from "axios"

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
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
    }

    return (
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
    )
  }
}

export default BannerSection
