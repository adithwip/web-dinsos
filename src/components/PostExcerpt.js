import React from "react"
import { Link } from "gatsby"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const PostExcerpt = props => (
  <Container flexDirection="column">
    <Item>
      <Link to={props.data.fields.slug}>
        <h3>{props.data.frontmatter.title}</h3>
      </Link>
      <p>{props.data.frontmatter.date}</p>
      <p style={{ color: "black" }}>{props.data.excerpt}</p>
    </Item>
  </Container>
)

export default PostExcerpt
