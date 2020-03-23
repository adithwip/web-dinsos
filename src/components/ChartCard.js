import React from "react"
import styled from "styled-components"
import Card from "@material-ui/core/Card"

const StyledCard = styled(Card)`
  opacity: 0.8;
  padding: 8px;
  background-color: rgb(251, 251, 251);
  color: rgb(25,25,25);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const ChartCard = props => {
  return (
    <>
      <StyledCard>
        <strong>{props.title}</strong>
        {props.children}
      </StyledCard>
    </>
  )
}

export default ChartCard
