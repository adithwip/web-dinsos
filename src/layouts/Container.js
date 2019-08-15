import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
    `}

  ${props =>
    props.spacing &&
    css`
      & > div.grid-item {
        padding: ${props => props.spacing / 2}px;
      }
    `}

  ${props =>
    props.column &&
    css`
      @media (min-width: 768px) {
        flex-direction: row !important;
        flex-wrap: wrap;
      }

      & > div.grid-item {
        @media (min-width: 768px) {
          display: block;
          flex: none;
          width: ${props => 100 / props.column}%;
        }

        /* @media (min-width: 992px) {
          display: block;
          flex: none;
          width: ${props => 100 / (props.column + 1)}%;
        } */
      }
    `}
`

const Container = props => {
  const {
    column,
    flexDirection,
    flexWrap,
    justify,
    alignItems,
    alignContent,
    responsive,
    fullHeight,
  } = props
  const classNames = [`grid-container`, (() => column && `column`)()]
    .join(" ")
    .trim()

  return (
    <StyledContainer
      className={classNames}
      column={column}
      responsive={responsive}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      fullHeight={fullHeight}
      {...props}
    />
  )
}

Container.propTypes = {
  responsive: PropTypes.bool,
  fullHeight: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  spacing: PropTypes.oneOf([8, 16, 24, 32]),
  column: PropTypes.oneOf([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "stretch",
  ]),
}

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justify: "flex-start",
  alignItems: "stretch",
  alignContent: "flex-start",
}

export default Container
