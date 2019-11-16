import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import Layout from "../layouts/Layout"
import Container from "../layouts/Container"
import Item from "../layouts/Item"
import Surface from "../components/Surface"

const BASE_URL = `http://104.43.9.40:8089/api/v1/cms/news`

class NewsDetail extends React.Component {
  state = {
    data: null,
    loading: false,
    error: false,
  }

  fetchData = () => {
    const { id } = this.props
    this.setState({ loading: true })
    axios
      .get(`${BASE_URL}/${id}`, { crossdomain: true })
      .then(result => {
        const { data } = result
        this.setState({
          data: data,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error,
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { data, loading, error } = this.state
    const news = data && data.data

    return (
      <Layout
        // siteTitle={post.frontmatter.title}
        siteType="article"
        mobileFirst
        // siteUrl={url}
        // siteImage={image}
        siteDescription={data && news.title}
      >
        {data != null ? (
          <Surface>
            <Container flexDirection="column">
              <Item>
                <h1>{news.title}</h1>
              </Item>
              <Item>
                <img src={news.image} />
              </Item>
              <Item>
                <p style={{ color: "#1CA086" }}>{news.created_at}</p>
              </Item>
              <Item>
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              </Item>
            </Container>
          </Surface>
        ) : (
          <div>Sedang Memuat Berita...</div>
        )}
      </Layout>
    )
  }
}

export default NewsDetail
