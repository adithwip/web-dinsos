import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const StyledBgImg = styled.div`
  /* Location of the image */
  background-image: url(${props => props.imgSrc});
  
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  
  /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
  /* background-attachment: fixed; */
  
  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;
  
  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color:#464646;

  position: relative;
  min-height: ${props => props.minHeight || 300}px;
`

const NewsDetailSection = styled.div`
  width: 100%;
  max-height: 140px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  justify-content: center;
  /* align-items: center; */

  background-color: rgba(1, 4, 4, 0.7);
  color: white;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

const LinkedStyledBgImg = ({ imgSrc, minHeight, title, newsId, newsCategory }) => {
  return (
    <StyledBgImg imgSrc={imgSrc} minHeight={minHeight}>
      <NewsDetailSection>
        <Link to={`news/${newsId}`}>
          <Typography style={{ color: 'white', fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Link>
        <div>
          <Typography variant="overline">
            {`Category: ${newsCategory}`}
          </Typography>
        </div>
      </NewsDetailSection>
    </StyledBgImg>
  )
}


class HotNews extends React.Component {
  render() {
    const { newsArr } = this.props
    console.log("newsArr", newsArr)
    if (newsArr != null) {
      return (
        <Grid container spacing={2}>
          <Grid item md={12}>
            <LinkedStyledBgImg
              imgSrc={newsArr[0].image}
              minHeight={400}
              title={newsArr[0].title}
              newsId={newsArr[0].id}
              newsCategory={newsArr[0].category}
            />
          </Grid>
          <Grid item md={4}>
            <LinkedStyledBgImg
              imgSrc={newsArr[0].image}
              title={newsArr[0].title}
              newsId={newsArr[0].id}
              newsCategory={newsArr[0].category}
            />
          </Grid>
          <Grid item md={4}>
            <LinkedStyledBgImg
              imgSrc={newsArr[0].image}
              title={newsArr[0].title}
              newsId={newsArr[0].id}
              newsCategory={newsArr[0].category}
            />
          </Grid>
          <Grid item md={4}>
            <LinkedStyledBgImg
              imgSrc={newsArr[0].image}
              title={newsArr[0].title}
              newsId={newsArr[0].id}
              newsCategory={newsArr[0].category}
            />
          </Grid>
        </Grid>
      )
    } else {
      return null
    }
  }
}

export default HotNews