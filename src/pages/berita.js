import React from "react"
import axios from "axios"
// import { Link } from "gatsby"
import { Link } from "@reach/router"
import PageContainer from "../layouts/PageContainer"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import styled from "styled-components"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
` 
const NewsCard = styled(Card)`
  
  & div {
    width: 100%;
    padding: 16px;
  }

  & :hover {
    background-color: #f0f0f0;
  }
`

class BeritaPage extends React.Component {
  state = { dataJson: null, error: false, loading: false, page: 1 }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://104.43.9.40:8089/api/v1/cms/news`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson } = this.state

    const daftarBerita = !!dataJson && dataJson.data

    return (
      <Wrapper>
      <Layout
        noPageContainer
        siteTitle="Berita"
        siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
      >
        <PageContainer>
          <Grid container direction="column" style={{ minHeight:"500px", marginBottom:"25px" }}>
            <Grid item xs>
              <h2>Berita dan Informasi</h2>
            </Grid>
            <Grid container direction="row" spacing={16}>
                {!!daftarBerita &&
                  daftarBerita.map(berita => {
                    return (
                      <Grid key={berita.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom:"10px" }}>
                        <Link
                        to={`news/${berita.id}`}
                        style={{ textDecoration: "none" }}
                        >
                        <NewsCard style={{ height:"100%" }}>
                          <div>
                            { !!berita.image && (
                              <img
                                src={ berita.image }
                                width="100%" height="180px" alt="berita-pusdatin" />
                            ) }
                            
                            <h3>{berita.title}</h3>                            
                            <span>{ new Date(berita.created_at).toLocaleDateString("id-ID") }</span>
                            <p>
                              { (berita.content.replace(/(<([^>]+)>)/ig,"")).substring(0, 150) } ...
                            </p>
                          </div>
                        </NewsCard>
                      </Link>
                      </Grid>                      
                    )
                  })}
            </Grid>
          </Grid>
        </PageContainer>
      </Layout>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}
export default BeritaPage
