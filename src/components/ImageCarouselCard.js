import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from "react-responsive-carousel"
import BackgroundImage from "gatsby-background-image"
import Card from "@material-ui/core/Card"

const StyledBgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  min-height: 380px;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

const ImageCarouselCard = () => {
  const data = useStaticQuery(
    graphql`
      query {
        imageOne: file(relativePath: { eq: "images/pusdatin-one.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "images/pusdatin-two.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "images/image-three.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const images = [
    { fluidImg: data.imageOne.childImageSharp.fluid },
    { fluidImg: data.imageTwo.childImageSharp.fluid },
    { fluidImg: data.imageThree.childImageSharp.fluid },
  ]

  return (
    <Card>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        dynamicHeight
        emulateTouch
      >
        {images.map(image => (
          <div key={image.fluidImg}>
            <StyledBgImage fluid={image.fluidImg} />
          </div>
        ))}
      </Carousel>
    </Card>
  )
}

export default ImageCarouselCard
