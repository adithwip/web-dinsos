import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
  padding: 0 32px;
  margin-bottom: 12px;
`
class GallerySection extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      // .get(
      //   `http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/galleries`,
      //   {
      //     crossdomain: true,
      //   }
      // )
      .get(
        `http://104.43.9.40:8089/api/v1/cms/galleries?type=galeri&perpage=6`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        const { data } = result.data
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
    const { dataJson, error, loading } = this.state

    return (
      <StyleContainer style={{ marginTop: "10px", marginBottom: "40px" }}>
        <h2>Galeri</h2>
        <Grid container spacing={2}>
          {!!dataJson &&
            dataJson.map(data => {
              return (
                <Grid item xs={12} md={2}>
                  <a href={data.url} target={"_blank"}>
                    <img src={data.image} width="100%" height="100%" />
                  </a>
                </Grid>
              )
            })}
        </Grid>
        <Grid container item xs={12} justify="center">
          <Link to="/galeri">
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

export default GallerySection
