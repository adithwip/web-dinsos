import React from "react"
import axios from "axios"
import { Link } from "gatsby"
import PageContainer from "../layouts/PageContainer"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

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
      <Layout
        noPageContainer
        siteTitle="Berita"
        siteDescription="Berita Pusdatin Dinas Sosial Provinsi DKI Jakarta"
      >
        <PageContainer>
          <Container flexDirection="column">
            <Item>
              <h2>Berita dan Informasi</h2>
            </Item>
            <Item>
              <Container flexDirection="column" spacing={16} column={3}>
                {!!daftarBerita &&
                  daftarBerita.map(berita => {
                    console.log("berita", berita)

                    return (
                      <Item key={berita.id}>
                        <Container flexDirection="column">
                          <Item>
                            <Link to={"/news/" + berita.id}>
                              <h4>{berita.title}</h4>
                            </Link>
                            <p>{berita.created_at}</p>
                          </Item>
                        </Container>
                      </Item>
                    )
                  })}
              </Container>
            </Item>
          </Container>
        </PageContainer>
      </Layout>
    )
  }
}
export default BeritaPage
