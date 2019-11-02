import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import { Bar } from "react-chartjs-2"

import ChartCard from "../ChartCard"
import { convertDataBersihPMKSToChartData } from "../../utils/charts/dataLokasiBersihPMKS"
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
      .get(`https://api.myjson.com/bins/12pb5t`, {
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

    convertDataBersihPMKSToChartData(dataBersihPMKS, 'labels')
    // convertDataBersihPMKSToChartData(dataBersihPMKS, 'month')
    // convertDataBersihPMKSToChartData(dataBersihPMKS, 'area')

    // const dataBarChart = {
    //   labels: convertDataBersihPMKSToChartData(dataPemulangan, 'labels'),
    //   datasets: [
    //     {
    //       label: 'Data Lokasi Bersih PMKS',
    //       backgroundColor: '#CCDBDC',
    //       borderColor: '#CCDBDC',
    //       borderWidth: 1,
    //       hoverBackgroundColor: '#CCDBDC',
    //       hoverBorderColor: '#CCDBDC',
    //       data: [1, 2, 3, 4, 5]
    //     }
    //   ]
    // };

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
              {/* <Bar
                data={dataBarChart}
              /> */}
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataLokasiBersihPMKSChart