import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledItem = styled.div`
  flex: ${props => props.flex};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props =>
    props.alignSelf &&
    css`
      align-self: ${props => props.alignSelf};
    `}

  ${props =>
    props.align &&
    css`
      text-align: ${props => props.align};
    `}
`

const Item = props => {
  const { flex, alignSelf, align } = props

  return (
    <StyledItem
      className="grid-item"
      flex={flex}
      alignSelf={alignSelf}
      align={align}
      {...props}
    />
  )
}

Item.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignSelf: PropTypes.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]),
  align: PropTypes.oneOf([
    "left",
    "right",
    "center",
    "justify",
    "initial",
    "inherit",
  ]),
}

Item.defaultProps = {
  flex: "none",
}

export default Item
