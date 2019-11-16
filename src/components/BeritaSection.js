import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
    background-color : #f6f6f6;
    padding : 12px 32px;
    margin-bottom: 20px;
`

const NewsCard = styled(Card)`
  & div {
		width: 100%;
    padding: 16px;
  }

  & :hover {
    background-color: #f0f0f0
  }
`

const BeritaSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allPusdatinNews {
          edges {
            node {
              id
              title
              slug
              created_at
              content
              image
              category
            }
          }
        }
      }
    `
	)

  return (
    <StyleContainer container spacing={3} id="berita">
      <Grid item xs={12}>
        <h2>Berita Terkini</h2>
      </Grid>
      <Grid item style={{ flex: 1 }}>
        <Grid container spacing={3}>
          {data.allPusdatinNews.edges.map(({ node }) => {
            return (
              <Grid item md={3}>
                <Link to={`berita/${node.slug}`} style={{ textDecoration:"none" }}>
                  <NewsCard>
                    <div>
                      <img src={node.image} width="100%" height="180px" />
                      <h3>{node.title}</h3>
                      <p>
                        {node.title}
                      </p>
                      <span>{ node.created_at }</span>
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
            <Button variant="contained"  color="secondary" style={{ margin: "25px 0 0 25px" }}>
              Lihat Lainnya &gt;&gt;
            </Button>
          </Link>  
      </Grid>
    </StyleContainer>
  )
}

export default BeritaSection
