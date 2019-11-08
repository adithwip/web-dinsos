import React from "react"
import axios from "axios"
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

class ProfilPage extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/profile`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state

    return (
      <Layout
        siteTitle="Profil"
        siteDescription="Will provide my readers about myself"
      >
        <h2>Profil</h2>

        <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
          <NavButton href="#tugas">Tugas</NavButton>
          <NavButton href="#fungsi">Fungsi</NavButton>
          <NavButton href="#struktur">Struktur Organisasi</NavButton>
        </div>

        <h3 id="tugas">Tugas</h3>
        <div
          dangerouslySetInnerHTML={{ __html: !!dataJson && dataJson.tasks }}
        />

        <h3 id="fungsi">Fungsi</h3>
        <div
          dangerouslySetInnerHTML={{ __html: !!dataJson && dataJson.functions }}
        />

        <h3 id="struktur">Struktur Organisasi</h3>
        <img src={!!dataJson && dataJson.structure} width="100%" />
      </Layout>
    )
  }
}
export default ProfilPage
