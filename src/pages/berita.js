import React from "react"
import { graphql, Link } from "gatsby"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import PageContainer from "../layouts/PageContainer"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import PostExcerpt from "../components/PostExcerpt"

const StyledBackgroundImage = styled(BackgroundImage)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  @media (max-width: 576px) {
    height: 50vh;
  }
`

const BeritaPage = ({ data }) => {
  return (
    <Layout
      noPageContainer
      siteTitle="Berita"
      siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
    >
      <Slider dots={true} infinite={true} speed={500} arrows={false}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <StyledBackgroundImage
              Tag="section"
              className="background-image"
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            >
              <Container
                justify="center"
                alignItems="flex-end"
                fullHeight
                spacing={32}
              >
                <Item>
                  <Link
                    style={{
                      textShadow: "unset",
                      color: "white",
                      backgroundColor: "black",
                      padding: "8px 16px",
                      borderRadius: 20,
                      marginBottom: 16,
                    }}
                    to={node.fields.slug}
                  >
                    Klik untuk ke Berita
                  </Link>
                </Item>
              </Container>
            </StyledBackgroundImage>
          )
        })}
      </Slider>

      <PageContainer>
        <Container flexDirection="column">
          <Item>
            <h2>Berita dan Informasi</h2>
          </Item>
          <Item>
            <Container flexDirection="column" spacing={16} column={2}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Item key={node.id}>
                  <PostExcerpt data={node} />
                </Item>
              ))}
            </Container>
          </Item>
        </Container>
      </PageContainer>
    </Layout>
  )
}

export default BeritaPage

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              ...fluidImage
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
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
