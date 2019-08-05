import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledHeader = styled.header`
  padding: 16px;
`

const Header = () => {
  const [open, navbarToggle] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }

        headerLogo: file(relativePath: { eq: "images/dinsos-logo.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  console.log("data", data)

  return (
    <StyledHeader id="header">
      <Container alignItems="center" justify="space-between">
        <Item>
          <Container alignItems="center" spacing={16}>
            <Item>
              <Img fixed={data.headerLogo.childImageSharp.fixed} />
            </Item>
            <Item>
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Dinas Sosial
              </span>
            </Item>
          </Container>
        </Item>

        <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
          <Item>
            <button onClick={() => navbarToggle(!open)}>Menu</button>
          </Item>
          {open && (
            <div
              style={{
                boxSizing: "border-box",
                paddingLeft: 16,
                paddingRight: 16,
                width: "60%",
                backgroundColor: "white",
                // display: flex;
                // flex-direction: column;
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 250,
                height: "100vh",
              }}
            >
              <Container flexDirection="column">
                <Item>
                  <button onClick={() => navbarToggle(!open)}>Close</button>
                </Item>
                <Item>Menu Item</Item>
                <Item>Menu Item</Item>
                <Item>Menu Item</Item>
              </Container>
            </div>
          )}
        </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
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
              <Item>
                <Link to="/files">File System</Link>
              </Item>
            </Container>
          </Item>
        </MediaQuery>
      </Container>
    </StyledHeader>
  )
}

export default Header
