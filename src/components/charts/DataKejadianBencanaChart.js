import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import Chart from "../Chart"
import TotalChartData from "../TotalChartData"
import ChartCard from "../ChartCard"
import { convertDataKejadianBencanaToChartData } from "../../utils/charts/dataKejadianBencana"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataKejadianBencanaChart extends React.Component {
  state = {
    dataKejadianBencana: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/sdr4c`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataKejadianBencana: data,
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
    const { dataKejadianBencana, loading } = this.state
    const dataKejadianBencanaToChartData = convertDataKejadianBencanaToChartData(dataKejadianBencana, 'data')

    const renderSetsOfTotalChartData = () => (
      <Container flexWrap="wrap" spacing={8}>
        {dataKejadianBencanaToChartData.map(data => {
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

    const dataBarChart = {
      labels: convertDataKejadianBencanaToChartData(dataKejadianBencana, 'labels'),
      datasets : convertDataKejadianBencanaToChartData(dataKejadianBencana, 'data')
    };
    
    const customOptions = {
      legend : { 
        display: false,
      },
      tooltips: {
        mode: 'x',
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
      scales : {
        xAxes:[{
          stacked: true,
          ticks: {
            fontColor: "white"
          }
        }],
        yAxes:[{
          stacked: true,
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }

    return (
      <ChartCard title="Data Kejadian Bencana" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          {loading ? (
            <div>
              <p>Loading Charts...</p>
            </div>
          ) : (
            <Container flexDirection="column" spacing={16}>
              <Item flex={1}>
                <Chart type="bar" data={dataBarChart} options={customOptions}/>
              </Item>
              <Item flex={1}>
                {renderSetsOfTotalChartData()}
              </Item>
            </Container>
          )}
        </Grid>
      </ChartCard>
    )
  }
}

export default DataKejadianBencanaChart