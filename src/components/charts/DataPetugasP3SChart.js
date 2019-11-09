import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import TotalChartData from "../TotalChartData"
import Chart from "../Chart"
import { convertDataP3StoChartData } from "../../utils/charts/dataPetugasP3SUtils"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataP3SChart extends React.Component {
  state = {
    dataP3S: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/kv1wk`, {
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
    const { dataP3S, error, loading } = this.state

    const randomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const chartDataDoughnut = {
      labels: convertDataP3StoChartData(dataP3S, "labels"),
      datasets: [{
        data: convertDataP3StoChartData(dataP3S, "data"),
        backgroundColor: [randomColor(),randomColor(),randomColor(),randomColor(),randomColor()]
      }]
    };
    

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'left'
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
    }

    return (
      <ChartCard title="Data Petugas P3S" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="doughnut" data={chartDataDoughnut} options={customOptions} />
            </Item>
            <Item flex={1}>
              <TotalChartData data={convertDataP3StoChartData(dataP3S, "data")} />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataP3SChart