import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledPageContainer = styled.section`
  /* Fix header style accommodation */
  margin-top: ${props => (props.mobileView ? "70px" : "135px")};
  margin-bottom: ${props => (props.mobileView ? "70px" : "135px")};

  && {
    width: 100%;
    padding-right: ${props => (props.mobileView ? "16px" : "32px")};
    padding-left: ${props => (props.mobileView ? "16px" : "32px")};
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    ${props =>
      props.mobileFirst &&
      !props.mobileView &&
      css`
        max-width: 1280px;
      `}
  }

  @media (min-width: 992px) {
    max-width: 1280px;
    ${props =>
      props.mobileFirst &&
      !props.mobileView &&
      css`
        max-width: 860px;
      `}
  }

  @media (min-width: 1200px) {
    max-width: 1280px;
    ${props =>
      props.mobileFirst &&
      !props.mobileView &&
      css`
        max-width: 860px;
      `}
  }
`

const PageContainer = ({ mobileFirst, mobileView, ...props }) => {
  return (
    <StyledPageContainer
      className="page-container"
      mobileFirst={mobileFirst}
      mobileView={mobileView}
      {...props}
    />
  )
}

PageContainer.propTypes = {
  mobileFirst: PropTypes.bool,
  mobileView: PropTypes.bool,
}

PageContainer.defaultProps = {
  mobileFirst: false,
  mobileView: false,
}

export default PageContainer
