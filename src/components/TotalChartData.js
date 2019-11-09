import React from "react"
import styled from "styled-components"

import Container from "../layouts/Container"
import Item from "../layouts/Item"
import Typography from "@material-ui/core/Typography"

const StyledContainer = styled.div`
  background-color: black;
  padding: 4px 8px;
  border-radius: 100px;
  max-width: 220px;
`

const TotalChartData = props => {
  
  const sumOfData = props.data.reduce((total, num) => {
    return total + num
  }, 0)
  const totalNumber = new Intl.NumberFormat('id-ID', ).format(sumOfData)

  return (
    <StyledContainer>
      <Container spacing={16} alignContent="center" alignItems="center">
        <Item flex={1} align="center">
          <Typography variant="overline">Total Data</Typography>
        </Item>
        <Item flex={1} align="center">
          <Typography variant="overline">{totalNumber}</Typography>
        </Item>
      </Container>
    </StyledContainer>
  )
}

export default TotalChartData
