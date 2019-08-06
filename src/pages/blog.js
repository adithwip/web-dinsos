import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import PostExcerpt from "../components/PostExcerpt"

const BlogPage = ({ data }) => {
  const totalCount = data.allMarkdownRemark.totalCount

  return (
    <Layout
      siteTitle="Blog Page"
      siteDescription="Homepage of Dinas Sosial DKI Jakarta web"
    >
      <Container flexDirection="column">
        <Item>
          <h4>
            {totalCount} {totalCount > 0 ? "Posts" : "Post"}
          </h4>
        </Item>
        <Item>
          <Container flexDirection="column" spacing={8} column={2}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Item key={node.id}>
                <PostExcerpt data={node} />
              </Item>
            ))}
          </Container>
        </Item>
      </Container>
    </Layout>
  )
}

export default BlogPage

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
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
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
  }
`
