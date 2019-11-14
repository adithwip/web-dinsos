import React from "react"

import Container from "../layouts/Container"
import Item from "../layouts/Item"

const Footer = (props) => (
  <Container justify="center" 
    style={{ 
      backgroundColor: BackgroundColor(props.background),
      color: Color(props.color) 
    }}
  >
    <Item>
      <h6 style={{ color: Color(props.color) }}>&copy; Copyright - Pusdatin Dinas Sosial Provinsi DKI Jakarta</h6>
    </Item>
  </Container>
)

const BackgroundColor = (color) => {
  return color !== undefined ? color : "#fff";
}

const Color = (color) => {
  return color !== undefined ? color : "#000";
}

export default Footer
