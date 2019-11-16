import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledPageContainer = styled.section`
  /* Fix header style accommodation */
  margin-top: 132px;

  && {
    width: 100%;
    padding-right: 32px;
    padding-left: 32px;
    margin-right: auto;
    margin-left: auto;
  }

  /* @media (min-width: 576px) {
    max-width: 540px;
  } */

  @media (min-width: 768px) {
    ${props =>
      props.mobileFirst &&
      css`
        max-width: 1280px;
      `}
  }

  /* @media (max-width: 767px) {
    padding: 0 !important;
  } */

  @media (min-width: 992px) {
    ${props =>
      props.mobileFirst &&
      css`
        max-width: 1280px;
      `}
  }

  @media (min-width: 1200px) {
    ${props =>
      props.mobileFirst &&
      css`
        max-width: 1280px;
      `}
  }
`

const PageContainer = ({ mobileFirst, ...props }) => {
  console.log(mobileFirst)
  return (
    <StyledPageContainer
      className="page-container"
      mobileFirst={mobileFirst}
      {...props}
    />
  )
}

PageContainer.propTypes = {
  mobileFirst: PropTypes.bool,
}

PageContainer.defaultProps = {
  mobileFirst: false,
}

export default PageContainer
