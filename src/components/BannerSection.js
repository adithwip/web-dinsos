import React from "react"
import styled from "styled-components"

import Slider from "react-slick"
import axios from "axios"

import Loader from "./Loader"

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  /* background-color: rgba(0, 0, 14, 0.63); */
  background-color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`

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
      .get(`https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/banners`, {
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
    const { dataJson } = this.state

    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
    }

    if (!!dataJson) {
      return (
        <CustomSlider
          {...settings}
          style={{
            width: "100%",
          }}
        >
          {!!dataJson &&
            dataJson.map(data => {
              return (
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#447694",
                  }}
                >
                  <img src={data.image} width="100%" alt={data.image}/>
                </div>
              )
            })}
        </CustomSlider>
      )
    } else {
      return (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      )
    }
  }
}

export default BannerSection
