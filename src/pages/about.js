import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

const AboutPage = () => (
  <Layout
    siteTitle="Profil"
    siteDescription="Will provide my readers about myself"
  >
    <StyledPaper>
      <h1>Dinas Sosial DKI Jakarta</h1>
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
          <Link to="/blog">Berita dan Informasi</Link>
        </li>
      </ul>
    </StyledPaper>
  </Layout>
)

export default AboutPage
