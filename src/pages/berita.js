import React from "react"
import axios from "axios"
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
const ThumbnailBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 192px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

class BeritaPage extends React.Component {
  state = { dataJson: null, error: false, loading: false, page: 1 }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result
        this.setState({ dataJson: data, loading: false })
        console.log("ResponseApi", data)
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
    const { slugNews } = this.props
    console.log("slug", slugNews)
  }

  render() {
    const { dataJson, error, loading } = this.state
    const { data } = this.props
    let sourceUrl = "http://siaplus.pusdatin-dinsos.jakarta.go.id/"

    const daftarBerita = !!dataJson && dataJson.data

    return (
      <Layout
        noPageContainer
        siteTitle="Berita"
        siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
      >
        {/* <Slider dots={true} infinite={true} speed={500} arrows={false}>
          
          {!!daftarBerita && daftarBerita.map(berita => {
            return (
                // <StyledBackgroundImage
                //   Tag="section"
                //   className="background-image"
                //   fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                //   backgroundColor={`#040e18`}
                // >
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
                        to={ '/berita/' + berita.slug }
                      >
                        { berita.title }
                      </Link>
                    </Item>
                  </Container>
                // </StyledBackgroundImage>
            )
          })}
        </Slider> */}

        <PageContainer>
          <Container flexDirection="column">
            <Item>
              <h2>Berita dan Informasi</h2>
            </Item>
            <Item>
              <Container flexDirection="column" spacing={16} column={3}>
                {!!daftarBerita &&
                  daftarBerita.map(berita => {
                    console.log("berita", berita)

                    return (
                      <Item key={berita.id}>
                        <Container flexDirection="column">
                          <Item>
                            {/* <ThumbnailBackgroundImage fluid={ sourceUrl + berita.image } /> */}
                          </Item>
                          <Item>
                            <Link to={"/berita/" + berita.slug}>
                              <h4>{berita.title}</h4>
                            </Link>
                            <p>{berita.created_at}</p>
                          </Item>
                        </Container>
                      </Item>
                    )
                  })}
              </Container>
            </Item>
          </Container>
        </PageContainer>
      </Layout>
    )
  }
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
