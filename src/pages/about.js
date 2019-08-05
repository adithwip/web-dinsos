import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"

const AboutPage = () => (
  <Layout
    siteTitle="About Page"
    siteDescription="Will provide my readers about myself"
  >
    <h1>Hi, I'm Adith</h1>
    <p>You can contact me at:</p>
    <ul>
      <li>
        <a
          href="https://twitter.com/adith_wp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/adith-widya-pradipta-3a777894/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </li>
      <li>
        <Link to="/blog">Or see my blog posts</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage
