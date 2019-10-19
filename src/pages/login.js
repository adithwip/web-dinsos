import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

const LoginPage = () => {
  return (
    <Layout
      siteTitle="Login - Pusdatin Jamsos"
      siteDescription="Login Page"
    ></Layout>
  )
}

export default LoginPage
