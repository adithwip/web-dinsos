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
      .get(`https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/news?perpage=4`, {
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
                      <NewsCard style={{ height: "100%" }}>
                        <div>
                          {!!berita.image ? (
                            <img
                              src={berita.image}
                              width="100%"
                              height="180px"
                              alt="berita-pusdatin"
                            />
                          ) : (
                            <div
                              style={{
                                backgroundColor: "ghostwhite",
                                width: "100%",
                                height: "180px",
                              }}
                            >
                              &nbsp;
                            </div>
                          )}
                          <h4>{berita.title}</h4>
                          <span>
                            {new Date(berita.created_at).toLocaleDateString(
                              "id-ID"
                            )}
                          </span>
                          <p style={{ textAlign: "justify" }}>
                            {berita.content
                              .replace(/(<([^>]+)>)/gi, "")
                              .substring(0, 150)}{" "}
                            ...
                          </p>
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
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "35px 0 0 20px" }}
            >
              Lihat Lainnya &gt;&gt;
            </Button>
          </Link>
        </Grid>
      </StyleContainer>
    )
  }
}

export default BeritaSection
