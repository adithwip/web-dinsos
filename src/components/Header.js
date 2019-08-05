import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledHeader = styled.header`
  padding: 16px;
`

const Header = ({ smallHeader }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  if (smallHeader) {
    return (
      <StyledHeader id="header">
        <Container flexDirection="column" alignItems="center">
          <Item>
            <h3>{data.site.siteMetadata.title}</h3>
          </Item>
          <Item>
            <Container spacing={8}>
              <Item>
                <Link to="/">HOME</Link>
              </Item>
              <Item>
                <Link to="/about">ABOUT</Link>
              </Item>
              <Item>
                <Link to="/blog">BLOG</Link>
              </Item>
            </Container>
          </Item>
        </Container>
      </StyledHeader>
    )
  }

  return (
    <StyledHeader id="header">
      <Container flexDirection="column" alignItems="center">
        <Item align="center">
          <h1>{data.site.siteMetadata.title}</h1>
        </Item>
        <Item>
          <Container spacing={16}>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/about">About</Link>
            </Item>
            <Item>
              <Link to="/blog">Blog</Link>
            </Item>
          </Container>
        </Item>
      </Container>
    </StyledHeader>
  )
}

Header.prototype = {
  smallHeader: PropTypes.bool,
}

export default Header
