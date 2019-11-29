import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import { Link } from "@reach/router"

class StickyPostContainer extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://104.43.9.40:8089/api/v1/cms/news?perpage=2&chosen=true`, {
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
    const colorList = ["#87cc00", "#fd5308", "#00adef", "#FFAE03", "#967D69"]

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
          dataJson.map(berita => {
            return (
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  backgroundColor: colorList.shift(),
                  padding: "10px",
                  color: "#fff",
                }}
              >
                <h3 style={{ marginTop: "0.6rem" }}>{berita.title}</h3>
                <p style={{ textAlign: "justify", marginTop: "1rem" }}>
                  {berita.content
                    .replace(/(<([^>]+)>)/gi, "")
                    .substring(0, 150)}{" "}
                  ... [ <Link to={`news/${berita.id}`}>Baca Selanjutnya</Link> ]
                </p>
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default StickyPostContainer
