import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"

import Chart from "../Chart"

import { convertDataJandaPerintisKemerdekaanToChartData } from "../../utils/charts/dataJandaPerintisKemerdekaan"
import TotalChartData from "../TotalChartData"

class DataJandaPerintisKemerdekaanChart extends React.Component {
  state = {
    dataP3S: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/ihlmp`, {
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
    this.fetchDataPkh()
  }

  render() {
    const { dataP3S } = this.state

    const chartDataDoughnut1 = {
      labels: convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'labels', 1),
      datasets: [
        {
          label: 'Janda',
          backgroundColor: ['#1572E8', '#F03A47', '#F0A202', '#06D6A0', '#FFCE56', '#36A2EB'],
          data: convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'data', 1)
        }
      ]
    }

    const chartDataDoughnut2 = {
      labels: convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'labels', 2),
      datasets: [
        {
          label: 'Janda',
          backgroundColor: ['#1572E8', '#F03A47', '#F0A202', '#06D6A0', '#FFCE56', '#36A2EB'],
          data: convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'data', 2)
        }
      ]
    }

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"rgb(25,25,25)",
        },
        position: 'right'
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
    }

    return (
      <ChartCard title="Data Janda Perintis Kemerdekaan" to="data/data-petugas-p3s">
        <Grid
          style={{ minHeight: "300px", marginTop: "18px" }}
          container
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} md={6} style={{height:"100%", textAlign:"center", paddingTop: "40px"}}> 
            <Chart type="pie" data={chartDataDoughnut1} options={customOptions} style={{marginBottom: "10px"}}/>
            <hr/>
            <strong>Januari - Juni</strong>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign:"center", paddingTop: "40px" }} > 
            <Chart type="pie" data={chartDataDoughnut2} options={customOptions} style={{marginBottom: "10px"}}/>
            <hr/>
            <strong>Juli - Desember</strong>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <TotalChartData data={convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'data', 1)} />
              </Grid>
              <Grid item>
                <TotalChartData data={convertDataJandaPerintisKemerdekaanToChartData(dataP3S, 'data', 2)} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataJandaPerintisKemerdekaanChart