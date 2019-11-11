import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Card from "@material-ui/core/Card"

const StyledCard = styled(Card)`
  /* background-color: rgba(248, 255, 229, 0.5); */
  opacity: 0.8;
  padding: 8px;
  /* height: 140px; */
  background-color: #1565c0;
  color: white;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const ChartCard = props => {
  return (
    <>
      <Link to={props.to}>
        <StyledCard>
          <strong>{props.title}</strong>
          {props.children}
        </StyledCard>
      </Link>
    </>
  )
}

export default ChartCard
