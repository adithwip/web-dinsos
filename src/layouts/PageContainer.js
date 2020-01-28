import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledPageContainer = styled.section`
  /* Fix header style accommodation */
  margin-top: ${props => (props.mobileView ? "70px" : "120px")};
  margin-bottom: ${props => (props.mobileView ? "70px" : "120px")};

  margin: ${props => props.noMargin && "unset"};

  @media screen and (max-width: 480px) { 
    /* mobile */ 
    margin-top: 40px;
    margin-bottom: 60px;
  }

  margin-bottom: ${props => props.noMargin && "132px"};

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

const PageContainer = ({ mobileFirst, mobileView, noMargin, ...props }) => {
  return (
    <StyledPageContainer
      className="page-container"
      mobileFirst={mobileFirst}
      mobileView={mobileView}
      noMargin={noMargin}
      {...props}
    />
  )
}

PageContainer.propTypes = {
  mobileFirst: PropTypes.bool,
  mobileView: PropTypes.bool,
  noMargin: PropTypes.bool,
}

PageContainer.defaultProps = {
  mobileFirst: false,
  mobileView: false,
  noMargin: false,
}

export default PageContainer
