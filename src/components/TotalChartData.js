import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "../layouts/Container"
import Item from "../layouts/Item"
import Typography from "@material-ui/core/Typography"

const StyledContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 4px 8px;
  border-radius: 4px;
  max-width: 180px;
`

const TotalChartData = props => {
  
  const sumOfData = props.data.reduce((total, num) => {
    return total + num
  }, 0)
  const totalNumber = new Intl.NumberFormat('id-ID', ).format(sumOfData)

  return (
    <StyledContainer backgroundColor={props.backgroundColor}>
      <Container alignContent="center" alignItems="center" justify="center">
        <Item flex={1}>
          <Typography variant="caption">{props.label}</Typography>
        </Item>
        <Item flex={1} align="right">
          <Typography variant="caption">
            {totalNumber}
          </Typography>
        </Item>
      </Container>
    </StyledContainer>
  )
}

TotalChartData.defaultProps = {
  label: 'Total Data',
  backgroundColor: 'black',
}

TotalChartData.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
}

export default TotalChartData
