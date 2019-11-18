import React from "react"
import { Router } from "@reach/router"
import NewsDetail from "../components/NewsDetail"

const News = () => (
  <Router>
    <NewsDetail path="/news/:id" />
  </Router>
)

export default News
