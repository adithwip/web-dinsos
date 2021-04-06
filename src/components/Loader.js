import React from "react"
import "./style.css"
import styled from "styled-components"

import PusdatinLogo from "../images/icon.png"

const StyledLogo = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`

const Loader = () => {
  return (
    <div className="loadingio-eclipse">
      <div className="ldio-rpinwye8j0b">
        <StyledLogo src={PusdatinLogo} alt="pusdatin-logo" width="70%" />
        <div></div>
      </div>
    </div>
  )
}

export default Loader
