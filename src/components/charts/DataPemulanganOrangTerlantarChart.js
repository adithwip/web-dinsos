import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"
import { convertDataPemulanganToChartData } from "../../utils/charts/dataPemulanganOrangTerlantar"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataPemulanganOrangTerlantarChart extends React.Component {
  state = {
    dataPemulangan: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/7w27p`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataPemulangan: data,
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
    const { dataPemulangan, error, loading } = this.state

    const dataBarChart = {
      labels: convertDataPemulanganToChartData(dataPemulangan, 'labels'),
      // datasets: [
      //   {
      //     label: 'Data Pemulangan Orang Terlantar',
      //     backgroundColor: '#CCDBDC',
      //     borderColor: '#CCDBDC',
      //     borderWidth: 1,
      //     hoverBackgroundColor: '#CCDBDC',
      //     hoverBorderColor: '#CCDBDC',
      //     data: convertDataPemulanganToChartData(dataPemulangan, 'data')
      //   }
      // ]
      datasets: convertDataPemulanganToChartData(dataPemulangan, 'data')
    };

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'bottom'
      },
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
      <ChartCard title="Data Pemulangan Orang Terlantar" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="bar" data={dataBarChart} options={customOptions} />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPemulanganOrangTerlantarChart