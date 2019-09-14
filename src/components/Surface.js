import React from "react"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

const Surface = props => <StyledPaper {...props} />

export default Surface
