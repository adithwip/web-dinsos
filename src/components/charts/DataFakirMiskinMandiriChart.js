import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import Chart from "../Chart"
import TotalChartData from "../TotalChartData"

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
    this.fetchData()
  }

  render() {
    const { dataJson } = this.state
    const dataFakirMiskinMandiri = convertDataFakirMiskinMandiriToChartData(dataJson, 'data')

    const renderSetsOfTotalChartData = () => (
      <Container flexWrap="wrap" spacing={8}>
        {dataFakirMiskinMandiri.map(data => {
          return (
            <Item key={data.label}>
              <TotalChartData
                data={data.data}
                label={`${data.label} - ${data.stack}`}
                backgroundColor={data.backgroundColor}
              />
            </Item>
          )
        })}
      </Container>
    )

    const stackedData = {
      labels: convertDataFakirMiskinMandiriToChartData(dataJson, 'labels'),
      datasets: convertDataFakirMiskinMandiriToChartData(dataJson, 'data')
    };


    const stackedOptions = {
      legend : { 
        labels : {
          fontColor:"rgb(25,25,25)",
        },
        position: 'right'
      },
      tooltips: {
        mode: 'x',
      //   intersect: false
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
            <Item>
              {renderSetsOfTotalChartData()}
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataFakirMiskinMandiriChart