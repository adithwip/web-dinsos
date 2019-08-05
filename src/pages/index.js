import React from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import Layout from "../layouts/Layout"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 60vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const IndexPage = ({ data }) => {
  const images = [
    { image: data.imageOne.childImageSharp.fluid },
    { image: data.imageOne.childImageSharp.fluid },
    { image: data.imageOne.childImageSharp.fluid },
  ]

  return (
    <Layout
      noPageContainer
      siteTitle="Blog Page"
      siteDescription="Homepage of Adith Widya Pradipta's blog"
    >
      <Slider dots={true} infinite={true} speed={500} arrows={false}>
        {images.map(({ image }) => {
          return (
            <StyledBackgroundImage
              Tag="section"
              fluid={image}
              backgroundColor={`#040e18`}
            />
          )
        })}
      </Slider>
    </Layout>
  )
}

export default IndexPage

export const squareImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/image-one.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "images/image-two.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "images/image-three.jpg" }) {
      ...fluidImage
    }
  }
`
