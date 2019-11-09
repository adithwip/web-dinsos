import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"

import Chart from "../Chart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

import { convertDataPendampingPKHToChartData } from "../../utils/charts/dataPendampingPKH"

class DataPendapingPKHChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/ihysc`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataJson: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state
    
    const dataBarChart = {
      labels: convertDataPendampingPKHToChartData(dataJson, 'labels'),
      datasets: convertDataPendampingPKHToChartData(dataJson, 'data')
    };
    

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff"
        }
      },
      plugins: {
        datalabels: {
            color: 'white',
            labels: {
                title: {
                    font: {
                        weight: 'bold'
                    }
                },
                value: {
                    color: 'white'
                }
            }
        }
      },
      scales : {
        xAxes:[{
          ticks: {
            fontColor: "white"
          }
        }],
        yAxes:[{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }

    return (
      <ChartCard title="Data Pendamping PKH" to="data/data-petugas-p3s">
        <Grid style={{ height: "100%" }} container direction="column" justify="center">
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="horizontalBar" data={dataBarChart} options={ customOptions }/>
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPendapingPKHChart