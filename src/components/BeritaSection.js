import React from "react"
import axios from "axios"
import styled from "styled-components"
// import { Link } from "gatsby"
import { Link } from "@reach/router"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
  background-color: #f6f6f6;
  padding: 12px 32px;
  margin-bottom: 12px;
  padding-top: 2.5rem;
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

class BeritaSection extends React.Component {
  state = { dataJson: null, error: false, loading: false, page: 1 }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://104.43.9.40:8089/api/v1/cms/news?perpage=8`, {
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
      <StyleContainer container spacing={3} id="berita">
        <Grid item xs={12}>
          <h2>Berita Terkini</h2>
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <Grid container spacing={3}>
            {!!daftarBerita &&
              daftarBerita.map(berita => {
                return (
                  <Grid key={berita.id} item md={3}>
                    <Link
                      to={`news/${berita.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <NewsCard>
                        <div>
                          <img
                            src={berita.image}
                            width="100%"
                            height="180px"
                            alt="berita-pusdatin"
                          />
                          <h3>{berita.title}</h3>
                          <p>{berita.title}</p>
                          <span>{berita.created_at}</span>
                        </div>
                      </NewsCard>
                    </Link>
                  </Grid>
                )
              })}
          </Grid>
        </Grid>
        <Grid item xs={12} align="center">
          <Link to="/berita">      
            <Button variant="contained"  color="secondary" style={{ margin: "35px 0 0 20px" }}>
              Lihat Lainnya &gt;&gt;
            </Button>
          </Link>  
        </Grid>
      </StyleContainer>
    )
  }
}

export default BeritaSection
