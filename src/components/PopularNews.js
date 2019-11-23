import React from "react"
import axios from "axios"
import { Link } from "@reach/router"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const StyledBgImg = styled.div`
  background-image: url(${props => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;

  position: relative;
  width: 84px;
  height: 84px;
`

const StyledNewsContainer = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 8px;
`

const NewsContainer = ({ imgSrc, title, newsId }) => {
  return (
    <StyledNewsContainer>
      <Link to={`news/${newsId}`}>
        <Grid container alignContent="center" alignItems="center" spacing={1}>
          <Grid item>
            <StyledBgImg imgSrc={imgSrc} />
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Typography style={{ color: "black" }}>{title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </StyledNewsContainer>
  )
}

class PopularNews extends React.Component {
  state = {
    dataPopNews: null,
    loading: false,
    error: false,
  }

  fetchDataNewsPopular = () => {
    this.setState({ loading: true })
    axios.get(`http://104.43.9.40:8089/api/v1/cms/news?order_by=seen`, {
      crossdomain: true,
    })
    .then(result => {
      const { data } = result
      this.setState({
        dataPopNews: data,
        loading: false
      })
    })
    .catch(error => {
      this.setState({
        loading: false,
        error: error
      })
    })
  }

  componentDidMount() {
    this.fetchDataNewsPopular()
  }

  render() {
    const { dataPopNews } = this.state
    let dataPopNewstoRender = []

    console.log("dataPopNews", dataPopNews)

    if (dataPopNews && dataPopNews.total > 10) {
      dataPopNews.data.forEach((data, index) => {
        if (index < 10) {
          dataPopNewstoRender.push(data)
        }
      })
    } else {
      dataPopNewstoRender = dataPopNews && dataPopNews.data
    }

    return (
      <Grid container spacing={2} direction="column">
        {dataPopNewstoRender != null &&
          dataPopNewstoRender.map(news => {
            return (
              <Grid item>
                <NewsContainer
                  imgSrc={news.image}
                  title={news.title}
                  newsId={news.id}
                />
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default PopularNews
