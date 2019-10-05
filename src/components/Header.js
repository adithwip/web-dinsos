import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"

import AppBar from "./AppBar"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledHeader = styled.header`
  & * {
    color: black;
  }
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }

        headerLogo: file(relativePath: { eq: "images/dinsos-logo-full.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <StyledHeader id="header">
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
        <AppBar />
      </MediaQuery>

      <MediaQuery minDeviceWidth={768}>
        <Container
          style={{ padding: "16px 64px" }}
          alignItems="center"
          justify="space-between"
        >
          <Item>
            <Link to="/">
              <Container alignItems="center" spacing={16}>
                <Item>
                  <Img fixed={data.headerLogo.childImageSharp.fixed} />
                </Item>
              </Container>
            </Link>
          </Item>
          <Item>
            <Container spacing={16}>
              <Item>
                <Link to="/">
                  <Typography variant="button">Beranda</Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/profil">
                  <Typography variant="button">Profil</Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/berita">
                  <Typography variant="button">Berita</Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/infografis">
                  <Typography variant="button">Infografis</Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/login">
                  <Typography variant="button">Login</Typography>
                </Link>
              </Item>
            </Container>
          </Item>
        </Container>
      </MediaQuery>
    </StyledHeader>
  )
}

export default Header
