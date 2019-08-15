import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import { IconContext } from "react-icons"
import Img from "gatsby-image"

import { FaHandsHelping, FaRegNewspaper } from "react-icons/fa"
import { GoOrganization } from "react-icons/go"
import { MdContactMail } from "react-icons/md"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const StyledCard = styled(Card)`
  background-color: #f8ffe5;
  background-color: ${props =>
    (props.menu === "lks" && "#1572E8") ||
    (props.menu === "struktur-organisasi" && "#F03A47") ||
    (props.menu === "pusat-berita" && "#F0A202") ||
    (props.menu === "kontak" && "#06D6A0")};
  padding: 8px;
  height: 140px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const MenuText = styled(Typography)`
  color: white;
  color: ${props =>
    (props.menu === "open-data" ||
      props.menu === "lapor" ||
      props.menu === "lpse" ||
      props.menu === "jakarta") &&
    "black"};
`

const useStyles = makeStyles({
  icon: {
    fontSize: 64,
  },
})

const CardMenu = ({ href, to, menu }) => {
  const data = useStaticQuery(
    graphql`
      query {
        jakartaLogo: file(relativePath: { eq: "jakarta-logo.png" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        lpseLogo: file(relativePath: { eq: "LPSE-logo.png" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        openDataLogo: file(
          relativePath: { eq: "images/jakarta-open-data-logo.png" }
        ) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const classes = useStyles()

  const Component = (
    <IconContext.Provider
      value={{
        color: "white",
        className: classes.icon,
      }}
    >
      <StyledCard menu={menu}>
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Grid style={{ textAlign: "center" }} item>
            {menu === "lks" && <FaHandsHelping />}
            {menu === "struktur-organisasi" && <GoOrganization />}
            {menu === "pusat-berita" && <FaRegNewspaper />}
            {menu === "kontak" && <MdContactMail />}
            {menu === "jakarta" && (
              <Img fixed={data.jakartaLogo.childImageSharp.fixed} />
            )}
            {menu === "lpse" && (
              <Img fixed={data.lpseLogo.childImageSharp.fixed} />
            )}
            {menu === "open-data" && (
              <Img fixed={data.openDataLogo.childImageSharp.fixed} />
            )}
          </Grid>
          <Grid style={{ textAlign: "center" }} item>
            <MenuText menu={menu} variant="caption">
              {menu === "lks" && "Lembaga Kesejahteraan Sosial"}
              {menu === "struktur-organisasi" && "Struktur Organisasi"}
              {menu === "pusat-berita" && "Pusat Berita"}
              {menu === "kontak" && "Kontak DINSOS"}
              {menu === "jakarta" && "Jakarta Smartcity"}
              {menu === "lpse" && "Layanan Pengaduan Secara Elektronik"}
              {menu === "open-data" && "Jakarta Open Data"}
            </MenuText>
          </Grid>
        </Grid>
      </StyledCard>
    </IconContext.Provider>
  )

  return (
    <>
      {to && !href && <Link to={to}>{Component}</Link>}
      {href && (
        <a href={href} rel="noopener noreferrer">
          {Component}
        </a>
      )}
    </>
  )
}

CardMenu.defaultProps = {
  to: "/",
  href: undefined,
}

CardMenu.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  menu: PropTypes.oneOf([
    "lks",
    "pusat-berita",
    "kontak",
    "struktur-organisasi",
    "jakarta",
    "lpse",
    "open-data",
  ]),
}

export default CardMenu
