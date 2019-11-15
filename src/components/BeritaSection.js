import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
    padding : 12px 32px;
    margin-bottom: 12px;
`

const NewsCard = styled(Card)`
  & div {
		width: 100%;
    padding: 16px;
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
    <StyleContainer container spacing={3}>
      <Grid item xs={12}>
        <h2>Berita Terkini</h2>
      </Grid>
      <Grid item style={{ flex: 1 }}>
        <Grid container spacing={3}>
          {data.allPusdatinNews.edges.map(({ node }) => {
            return (
              <Grid item md={3}>
                <Link to={`berita/${node.slug}`}>
                  <NewsCard>
                    <div>
                      <h3>{node.title}</h3>
                      <p>
                        {node.title}
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
        <Button variant="outlined">Lihat Lainnya &gt;&gt;</Button>
      </Grid>
    </StyleContainer>
  )
}

export default BeritaSection
