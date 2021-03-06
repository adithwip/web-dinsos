import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../../ChartCard"

import Chart from "../../Chart"
import TotalChartData from "../../TotalChartData"

import Container from "../../../layouts/Container"
import Item from "../../../layouts/Item"

class FMOTMByAgeChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchDataAPI = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/7y79m`, { crossdomain: true })
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
    this.fetchDataAPI()
  }

  render() {
    const { dataJson } = this.state

    const extractData = (type, dataFromState) => {
        if (type === "age") {
            return ['0 - 4', '5 - 19', '20 - 64', '> 65']
        }

        if (type === "total") {
            return [
                !!dataFromState && dataFromState.h_nage04,
                !!dataFromState && dataFromState.h_nage0519,
                !!dataFromState && dataFromState.h_nage2064,
                !!dataFromState && dataFromState.h_nage65up
            ]
        }

        return []
    }

    const chartDataDoughnut = {
      labels: extractData('age', dataJson),
      datasets: [
        {
          label: extractData('age', dataJson),
          backgroundColor: [ '#FF5252', '#02C752', '#03A9F4', '#FE9F00' ],
          data: extractData('total', dataJson)
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
            anchor: 'end',
            align: 'start',
            clamp: true,
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
      <ChartCard title="FMOTM Berdasarkan Rentang Usia">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="pie" data={chartDataDoughnut} options={customOptions} />
            </Item>
            <Item>
              <TotalChartData data={extractData('total', dataJson)} />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default FMOTMByAgeChart