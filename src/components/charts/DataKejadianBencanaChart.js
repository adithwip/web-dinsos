import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import { Chart } from "@bit/primefaces.primereact.chart"

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
      .get(`https://api.myjson.com/bins/1e1tsp`, {
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
    const { dataKejadianBencana, error, loading } = this.state
    
    const dataBarChart = {
      labels: convertDataKejadianBencanaToChartData(dataKejadianBencana, 'labels'),
      datasets: [
        {
          label: 'Data Kejadian Bencana',
          backgroundColor: '#CCDBDC',
          borderColor: '#CCDBDC',
          borderWidth: 1,
          hoverBackgroundColor: '#CCDBDC',
          hoverBorderColor: '#CCDBDC',
          data: convertDataKejadianBencanaToChartData(dataKejadianBencana, 'data')
        }
      ]
    };

    return (
      <ChartCard title="Data Kejadian Bencana" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart
                type="horizontalBar"
                data={dataBarChart}
              />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataKejadianBencanaChart