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
    font-weight: bold;
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #5e92f3;

  /* Fix position style */
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
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

        headerLogo: file(relativePath: { eq: "images/pusdatin-logo.png" }) {
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
          style={{ padding: "8px 64px" }}
          alignItems="center"
          justify="space-between"
        >
          <Item>
            <Link to="/">
              <Container alignItems="center">
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
                  <Typography variant="button" style={{ color: "white" }}>
                    Beranda
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/profil">
                  <Typography variant="button" style={{ color: "white" }}>
                    Profil
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/berita">
                  <Typography variant="button" style={{ color: "white" }}>
                    Berita
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/infografis">
                  <Typography variant="button" style={{ color: "white" }}>
                    Infografis
                  </Typography>
                </Link>
              </Item>
              <Item>
                <a href="/#kontak">
                  <Typography variant="button" style={{ color: "white" }}>
                    Kontak
                  </Typography>
                </a>
              </Item>
              <Item>
                <a href="/data">
                  <Typography variant="button" style={{ color: "white" }}>
                    Data
                  </Typography>
                </a>
              </Item>
              <Item>
                <a href="http://siaplus.pusdatin-dinsos.jakarta.go.id/dashboard/login">
                  <Typography variant="button" style={{ color: "white" }}>
                    Login
                  </Typography>
                </a>
              </Item>
            </Container>
          </Item>
        </Container>
      </MediaQuery>
    </StyledHeader>
  )
}

export default Header
