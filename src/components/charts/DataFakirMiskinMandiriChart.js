import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

import { convertDataFakirMiskinMandiriToChartData } from "../../utils/charts/dataFakirMiskinMandiri"

class DataFakirMiskinMandiriChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/aazhw`, {
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
    console.log('')
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state

    const stackedData = {
      labels: convertDataFakirMiskinMandiriToChartData(dataJson, 'labels'),
      datasets: convertDataFakirMiskinMandiriToChartData(dataJson, 'data')
    };


    const stackedOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        }
      },
      tooltips: {
        mode: 'x',
      //   intersect: false
      },
      legend : { 
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
            ticks: {
              fontColor: "white"
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              fontColor: "white"
            }
          }
        ]
      }
    };

    return (
      <ChartCard title="Data Fakir Miskin Mandiri ( Januari - Juni / Juli - Desember )" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="bar" data={stackedData} options={ stackedOptions } />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataFakirMiskinMandiriChart