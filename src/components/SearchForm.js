import React from "react"
import { navigate } from "@reach/router"
import "./style.css"

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`news-search/${searchTerm}`)
  }
  console.log(searchTerm)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <input type="submit" value="Cari Berita" />
    </form>
  )
}

export default SearchForm
