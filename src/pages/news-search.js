import React from "react"
import { Router } from "@reach/router"
import NewsSearchDetail from "../components/NewsSearchDetail"

const NewsSearch = () => (
  <Router>
    <NewsSearchDetail path="/news-search/:id" />
  </Router>
)

export default NewsSearch
