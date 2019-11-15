import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const StyleContainer = styled(Grid)`
    padding : 12px 32px;
    margin-bottom: 12px;
}`

const NewsContainer = styled(Grid)`
  & div {
		width: 100%;
    padding: 8px;
    border: 1px solid #555;
    border-radius: 8px;
  }

  &:hover {
    color: "#457800";
  }
`

const mb20 = {
  marginBottom: "20px",
}
const mr20 = {
  marginRight: "20px",
}

const mx20 = {
  marginTop: "20px",
}

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
	console.log("DATA ==>", data)
  return (
    <StyleContainer container>
      <Grid item xs={12} style={mr20}>
        <h2>Berita Terkini</h2>
      </Grid>
      <Grid container spacing={3}>
				{data.allPusdatinNews.edges.map(({ node }) => {
					return (
						<Grid item xs={3}>
							<Link to={node.slug}>
								<NewsContainer container item xs={12} md={3}>
									<div>
										<h3>{node.title}</h3>
										<p>
											{node.title}
										</p>
									</div>
								</NewsContainer>
							</Link>
						</Grid>
					)
				})}
        {/* <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Satu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Dua</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Tiga</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Empat</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Lima</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Enam</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer>
        <NewsContainer container item xs={12} md={3}>
          <div>
            <h3>Berita Tujuh</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ...
            </p>
          </div>
        </NewsContainer> */}
      </Grid>
      <Grid item xs={12} align="center" style={mx20} spacing={3}>
        <Button variant="outlined">Lihat Lainnya &gt;&gt;</Button>
      </Grid>
    </StyleContainer>
  )
}

export default BeritaSection
