import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import Surface from "../components/Surface"

export const query = graphql`
  query($slug: String!) {
    # PusdatinNews(fields: { slug: { eq: $slug } }) {

    # }
    pusdatinNews(slug: { eq: $slug }) {
      title
      content
      created_at(formatString: "DD MMMM, YYYY")
      image
    }
    site {
      siteMetadata {
        image
      }
    }
  }
`

const Post = ({ data, location }) => {
  const post = data.pusdatinNews
  const url = location.href
  const image = data.site.siteMetadata.image

  return (
    <Layout
      // siteTitle={post.frontmatter.title}
      siteType="article"
      mobileFirst
      // siteUrl={url}
      // siteImage={image}
      // siteDescription={post.excerpt}
    >
      <Surface>
        <Container flexDirection="column">
          <Item>
            <h1>{post.title}</h1>
          </Item>
          <Item>
            <p style={{ color: "#1CA086" }}>{post.created_at}</p>
          </Item>
          <Item>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Item>
        </Container>
      </Surface>
    </Layout>
  )
}

export default Post
