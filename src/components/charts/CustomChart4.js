import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"

import Chart from "../Chart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class CustomChart4 extends React.Component {
  state = {
    dataP3S: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/12ipi9`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataP3S: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    // this.fetchDataPkh()    
    this.setState({
      loading: false, 
      dataP3S : [
        {"wilayah":"1-6","total":800},
        {"wilayah":"7-15","total":1350},
        {"wilayah":"15-20","total":500},
        {"wilayah":"20-40","total":2500},
        {"wilayah":"> 40","total":1800},
      ]
    })
  }

  render() {
    const { dataP3S, error, loading } = this.state

    const dataP3sArray = (type, dataFromState) => {
      let arr = []
      !!dataFromState &&
        dataFromState.forEach(data => {
          type === "area" && arr.push(data.wilayah)
          type === "total" && arr.push(data.total)
        })
      return arr
    }

    const chartDataDoughnut = {
      labels: dataP3sArray('area', dataP3S),
      datasets: [
        {
          backgroundColor: [
          '#1572E8',
          '#F03A47',
          '#F0A202',
          '#06D6A0',
          '#FFCE56',
          '#36A2EB',
          ],
          data: dataP3sArray('total', dataP3S)
        }
      ]
    }

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'right'
      }
    }

    return (
      <ChartCard title="Berdasarkan Rentang Usia">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="pie" data={chartDataDoughnut} options={customOptions}
              />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default CustomChart4