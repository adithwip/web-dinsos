import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { converDataPMKSToChartDataSetsByArea, getDataPMKSGroupByMonthNames } from "../../utils/charts/dataLokasiBersihPMKS"
import { Chart } from "@bit/primefaces.primereact.chart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

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
    const { dataBersihPMKS, error, loading } = this.state

    const stackedData = {
      labels: getDataPMKSGroupByMonthNames(dataBersihPMKS),
      datasets: converDataPMKSToChartDataSetsByArea(dataBersihPMKS)
    }

    const stackedOptions = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
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
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataLokasiBersihPMKSChart