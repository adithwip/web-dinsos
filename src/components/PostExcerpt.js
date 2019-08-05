import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const ThumbnailBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 192px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const PostExcerpt = props => (
  <Container flexDirection="column">
    <Item>
      <ThumbnailBackgroundImage
        fluid={props.data.frontmatter.thumbnail.childImageSharp.fluid}
      />
    </Item>
    <Item>
      <Link to={props.data.fields.slug}>
        <h4>{props.data.frontmatter.title}</h4>
      </Link>
      <p>{props.data.frontmatter.date}</p>
      <p style={{ color: "black" }}>{props.data.excerpt}</p>
    </Item>
  </Container>
)

export default PostExcerpt
