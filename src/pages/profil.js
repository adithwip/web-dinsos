import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
` 
// const data = useStaticQuery(
//   graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }

//       strukturOrganisasi: file(relativePath: { eq: "images/struktur-organisasi.png" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `
// )

const ProfilPage = () => (
  <Layout
    siteTitle="Profil"
    siteDescription="Will provide my readers about myself"
  >
    {/* <StyledPaper>
      <h1>Pusdatin Dinas Sosial Provinsi DKI Jakarta</h1>
      <p>Hubungi kami:</p>
      <ul>
        <li>
          <p>Email: pusdatinjamsosdki@gmail.com</p>
        </li>
        <li>
          <p>Telp: 021-22684824</p>
        </li>
        <li>
          <a
            href="https://twitter.com/dinsosdki1?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter Dinsos DKI
          </a>
        </li>
        <li>
          <a
            href="https://id-id.facebook.com/dinsosDKIJakarta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Dinsos DKI
          </a>
        </li>
        <li>
          <a
            href="https://www.kompasiana.com/dinsosdki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kompasiana Dinsos DKI
          </a>
        </li>
        <li>
          <Link to="/berita">Berita dan Informasi</Link>
        </li>
      </ul>
    </StyledPaper> */}
    <h2>Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta</h2>
    <h3>Visi</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h3>Misi</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
    <h3>Struktur Organisasi</h3>
    {/* <Img fixed={data.strukturOrganisasi.childImageSharp.Fluid} /> */}

  </Layout>
)

export default ProfilPage
