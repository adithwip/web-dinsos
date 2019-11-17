import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { converDataPMKSToChartDataSetsByArea, getDataPMKSGroupByMonthNames } from "../../utils/charts/dataLokasiBersihPMKS"

import Chart from "../Chart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"
import TotalChartData from "../TotalChartData"

class DataLokasiBersihPMKSChart extends React.Component {
  state = {
    dataBersihPMKS: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/dohq4`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataBersihPMKS: data,
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
    const { dataBersihPMKS } = this.state
    const DataSetsToShownAsTotalChartData = converDataPMKSToChartDataSetsByArea(dataBersihPMKS)

    const renderSetsOfTotalChartData = () => (
      <Container flexWrap="wrap" spacing={8}>
        {DataSetsToShownAsTotalChartData.map(data => {
          return (
            <Item>
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

    const stackedData = {
      labels: getDataPMKSGroupByMonthNames(dataBersihPMKS),
      datasets: converDataPMKSToChartDataSetsByArea(dataBersihPMKS)
    }

    const stackedOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'right'
      },
      plugins: {
        datalabels: {
            formatter: function(value, context) {
                return value > 0 ? value : "";
            },
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
      tooltips: {
        mode: 'index',
        intersect: false
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
    }

    return (
      <ChartCard title="Data Lokasi Bersih PMKS" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart
                type="bar"
                data={stackedData}
                options={stackedOptions}
              />
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

export default DataLokasiBersihPMKSChart