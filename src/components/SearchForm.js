import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Grid from "@material-ui/core/Grid"

const StyledForm = styled.form`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 16px;
  width: 100%;
`
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (searchTerm.length > 3) {
      navigate(`/news-search/${searchTerm}`)
    } else {
      alert("Minimum kata kunci tiga huruf...")
    }
  }
  console.log(searchTerm)
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item style={{ flex: 1 }}>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Cari Berita..."
          />
        </Grid>
        <Grid item>
          {/* <input type="submit" value="Cari Berita" /> */}
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            style={{
              color: "#0D1321",
            }}
            onClick={handleSubmit}
          />
        </Grid>
      </Grid>
    </StyledForm>
  )
}

export default SearchForm
