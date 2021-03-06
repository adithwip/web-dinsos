import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import TotalChartData from "../TotalChartData"

import Chart from "../Chart"
import { convertDataPKHtoChartData } from "../../utils/charts/dataPKH"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataPKHChart extends React.Component {
  state = {
    dataPkh: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/c8tb4`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataPkh: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    this.fetchDataPkh()
  }

  render() {
    const { dataPkh } = this.state

    const chartDataBar = {
      labels: convertDataPKHtoChartData(dataPkh, "labels"),
      datasets: [
        {
          label: 'Penerima PKH',
          backgroundColor: ['red','yellow','magenta','blue','green','cyan'],
          borderWidth: 0,
          data: convertDataPKHtoChartData(dataPkh, "data")
        }
      ]
    };
    
    const customOptions = {
      legend : { 
        display: false,
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
          ticks: {
            fontColor: "black"
          }
        }],
        yAxes:[{
          ticks: {
            fontColor: "black"
          }
        }]
      }
    }
    

    return (
      <ChartCard title="Data Penerima Program Keluarga Harapan (PKH)" to="data/data-pkh">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="horizontalBar" data={chartDataBar} options={ customOptions } />
            </Item>
            <Item>
              <TotalChartData data={convertDataPKHtoChartData(dataPkh, "data")} />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPKHChart