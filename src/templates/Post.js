import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import Surface from "../components/Surface"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
    site {
      siteMetadata {
        image
      }
    }
  }
`

const Post = ({ data, location }) => {
  const post = data.markdownRemark
  const url = location.href
  const image = data.site.siteMetadata.image

  return (
    <Layout
      siteTitle={post.frontmatter.title}
      siteType="article"
      siteUrl={url}
      siteImage={image}
      siteDescription={post.excerpt}
    >
      <Surface>
        <Container flexDirection="column">
          <Item>
            <h1>{post.frontmatter.title}</h1>
          </Item>
          <Item>
            <p style={{ color: "#1CA086" }}>{post.frontmatter.date}</p>
          </Item>
          <Item>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Item>
        </Container>
      </Surface>
    </Layout>
  )
}

export default Post
