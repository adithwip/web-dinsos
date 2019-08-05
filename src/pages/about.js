import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"

const AboutPage = () => (
  <Layout
    siteTitle="About Page"
    siteDescription="Will provide my readers about myself"
  >
    <h1>Dinas Sosial DKI Jakarta</h1>
    <p>Hubungi kami:</p>
    <ul>
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
  </Layout>
)

export default AboutPage
