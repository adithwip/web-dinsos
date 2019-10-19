import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`
const NavButton = styled.a`
  padding: 8px 12px;
  border-radius: 20px;
  width: 200px;
  margin: 0 4px;
  border: 1px solid gray;
`

const ProfilPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }

        strukturOrganisasi: file(
          relativePath: { eq: "images/struktur-organisasi.png" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout
      siteTitle="Profil"
      siteDescription="Will provide my readers about myself"
    >
      <h2>
        Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI
        Jakarta
      </h2>

      <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
        <NavButton href="#visi">Visi</NavButton>
        <NavButton href="#visi">Misi</NavButton>
        <NavButton href="#struktur">Struktur Organisasi</NavButton>
      </div>

      <h3 id="visi">Visi</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3 id="misi">Misi</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 id="struktur">Struktur Organisasi</h3>
      <Img fluid={data.strukturOrganisasi.childImageSharp.fluid} />
    </Layout>
  )
}

export default ProfilPage
