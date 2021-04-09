import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import { Link } from "@reach/router"

class StickyPostContainer extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/news?perpage=2&chosen=true`, {
        crossdomain: true,
      })
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
    const { dataJson } = this.state
    const colorList = ["#23CE6B", "#F45B69", "#1098F7", "#FE7F2D", "#967D69"]

    return (
      <Grid
        container
        xs
        direction="row"
        justify="center"
        alignItems="stretch"
        style={{
          zIndex: "1",
          position: "relative",
          padding: "0 35px",
        }}
      >
        {!!dataJson &&
          dataJson.map((berita, index) => {
            return (
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  backgroundColor: colorList[index],
                  padding: "10px",
                  color: "#fff",
                }}
                key={berita.id}
              >
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  style={{ height: "100%" }}
                >
                  <Grid item>
                    <h3 style={{ marginTop: "0.6rem" }}>{berita.title}</h3>
                  </Grid>
                  <Grid item>
                    <p style={{ textAlign: "justify", marginTop: "1rem" }}>
                      {berita.content
                        .replace(/(<([^>]+)>)/gi, "")
                        .substring(0, 148)}{" "}
                      <Link
                        style={{ color: "white", fontWeight: "bold" }}
                        to={`news/${berita.id}`}
                      >
                        ...Baca Selanjutnya
                      </Link>{" "}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default StickyPostContainer
