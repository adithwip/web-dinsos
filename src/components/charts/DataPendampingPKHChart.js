import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import Chart from "../Chart"
import TotalChartData from "../TotalChartData"

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
    const { dataJson } = this.state
    const dataPendampingPKHChartData = convertDataPendampingPKHToChartData(dataJson, 'data')

    const renderSetsOfTotalChartData = () => (
      <Container flexWrap="wrap" spacing={8}>
        {dataPendampingPKHChartData.map(data => {
          return (
            <Item key={data.label}>
              <TotalChartData
                data={data.data}
                label={data.label}
                backgroundColor={data.backgroundColor}
              />
            </Item>
          )
        })}
      </Container>
    )
    
    const dataBarChart = {
      labels: convertDataPendampingPKHToChartData(dataJson, 'labels'),
      datasets: convertDataPendampingPKHToChartData(dataJson, 'data')
    };    

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"rgb(25,25,25)"
        },
        position: 'right'
      },
      tooltips: {
        mode: 'x',
      },
      plugins: {
        datalabels: {
            formatter: function(value, context) {
                return value > 0 ? value : "";
            },
            color: 'black',
            labels: {
                title: {
                    font: {
                        weight: 'bold'
                    }
                },
                value: {
                    color: 'black'
                }
            }
        }
      },
      scales : {
        xAxes:[{
          stacked: true,
          ticks: {
            fontColor: "black"
          }
        }],
        yAxes:[{
          stacked: true,
          ticks: {
            fontColor: "black"
          }
        }]
      }
    }

    return (
      <ChartCard title="Data Pendamping PKH" to="data/data-petugas-p3s">
        <Grid style={{ height: "100%" }} container direction="column" justify="center">
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="bar" data={dataBarChart} options={ customOptions }/>
            </Item>
            <Item flex={1}>
              {renderSetsOfTotalChartData()}
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPendapingPKHChart