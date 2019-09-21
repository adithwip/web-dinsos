import React, { useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../layouts/Layout"

const getData = async () => {
  const API_URI = "https://rasetprojects.com/pusdatin/api/v1/cms/news"

  try {
    const result = await axios(API_URI)
    console.log("RESULT =====>", result.data)

    return result.data
  } catch (err) {
    throw new Error(err)
  }
}

const AboutPage = () => {
  useEffect(() => {
    getData()
  })

  const data = getData()

  return (
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
}

export default AboutPage
