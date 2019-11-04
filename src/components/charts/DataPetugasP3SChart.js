import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"
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

    const chartDataDoughnut = {
      labels: convertDataP3StoChartData(dataP3S, "labels"),
      datasets: [{
        data: convertDataP3StoChartData(dataP3S, "data"),
        backgroundColor: [
        '#CCDBDC',
        '#D5D6AA',
        '#8AA399',
        '#7AE7C7',
        '#FAFAFA',
        ],
        hoverBackgroundColor: [
        '#CCDBDC',
        '#D5D6AA',
        '#8AA399',
        '#7AE7C7',
        '#FAFAFA',
        ]
      }]
    };
    

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'left'
      }
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
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataP3SChart