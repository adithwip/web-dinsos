import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"

import AppBar from "./AppBar"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import RunningText from "./RunningText"

const StyledHeader = styled.header`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;

  /* Fix position style */
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`

const StyledLink = styled(Link)`
  position: relative;
  & :hover {
    & > div.subMenu {
      display: block;
    }
  }
`

const StyledGridItem = styled(Grid)`
  &:hover {
    background-color: #f9f5ff;
    font-weight: bold;
  }
`

const StyledSubMenu = styled.div`
  display: none;
  top: 18px;
  right: 0;

  width: 200px;
  /* height: 400px; */
  padding: 8px 16px;
  background-color: #FFF;
  border-radius: 4px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  z-index: 10;

  position: absolute;
`

const SubMenuData = () => {
  return (
    <StyledSubMenu className="subMenu">
      <Grid container spacing={1} direction="column">
        <StyledGridItem item>
          <Link to="/data/data-fmotm">
            FMOTM
          </Link>
        </StyledGridItem>
        <StyledGridItem item>
          <Link to="/data/data-lks">
            LKS
          </Link>
        </StyledGridItem>
        <StyledGridItem item>
          <Link to="/data/data-uepkube">
            UEP KUBE
          </Link>
        </StyledGridItem>
        <StyledGridItem item>
          <Link to="/data/data-opendata">
            Open Data Dinsos
          </Link>
        </StyledGridItem>
      </Grid>
    </StyledSubMenu>
  )
}

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
          style={{
            padding: "8px 32px",
            borderRadius: "0px 0px 0px 100px",
            backgroundColor: "#0d47a1",
            color: "#fff",
            height: "40px",
          }}
          alignItems="center"
          justify="flex-end"
        >
          <RunningText />
        </Container>
        <Container
          style={{ padding: "8px 32px" }}
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
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Beranda
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/profil">
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Profil
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/berita">
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Berita
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/infografis">
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Infografis
                  </Typography>
                </Link>
              </Item>
              <Item>
                <Link to="/unduhan">
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Unduhan
                  </Typography>
                </Link>
              </Item>
              <Item>
                <a href="#kontak">
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Kontak
                  </Typography>
                </a>
              </Item>
              <Item>
                <StyledLink to="/data" >
                  <Typography variant="button" style={{ color: "#2c2c2c" }}>
                    Data
                  </Typography>
                  <SubMenuData />
                </StyledLink>
              </Item>
            </Container>
          </Item>
        </Container>
      </MediaQuery>
    </StyledHeader>
  )
}

export default Header
