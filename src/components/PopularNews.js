import React from "react"
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

  padding: 8px;
  /* min-height: 100px; */
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

const PopularNews = ({ newsArr }) => {
  console.log("newsArr", newsArr)
  return (
    <Grid container spacing={1} direction="column">
      {newsArr &&
        newsArr.map(news => {
          console.log("news ===>", news)
          return (
            <NewsContainer
              imgSrc={news.image}
              title={news.title}
              newsId={news.id}
            />
          )
        })}
    </Grid>
  )
}

export default PopularNews
