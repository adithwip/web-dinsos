import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"

import Chart from "../Chart"
import { convertDataPKHtoChartData } from "../../utils/charts/dataPKH"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class CustomChart2 extends React.Component {
  state = {
    dataPkh: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/1g0h31`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataPkh: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    // this.fetchDataPkh()
    this.setState({
      loading: false, 
      dataPkh : [
        {"wilayah":"Kartu Jakarta Pintar","total":459083,"tahun":2019},
        {"wilayah":"Kartu Lansia Jakarta","total":103604,"tahun":2019},
        {"wilayah":"Kartu Jakarta Mahasiswa Unggulan","total":7004,"tahun":2019},
        {"wilayah":"Pemenuhan Kebutuhan Dasar Anak","total":69085,"tahun":2019},
        {"wilayah":"Pemenuhan Kebutuhan Dasar Disabilitas","total":12759,"tahun":2019}
        ]

    })
  }

  render() {
    const { dataPkh, error, loading } = this.state
  
    const chartDataBar = {
      labels: convertDataPKHtoChartData(dataPkh, 'labels'),
      datasets: [
        {
          label: 'Penerima Bantuan',
          backgroundColor: ['red','yellow','magenta','blue','green','cyan'],
          data: convertDataPKHtoChartData(dataPkh, 'data')
        }
      ]
    }

    const customOptions = {
      legend : { 
        display: false,
      },
      scales : {
        xAxes:[{
          ticks: {
            fontColor: "white"
          }
        }],
        yAxes:[{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }

    return (
      <ChartCard title={"Sebaran FMOTM berdasarkan Bantuan"} style={{}}>
        <Grid
          style={{ height: "100%", backgroundColor: "#418189", borderColor: "#fff" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart
                type="horizontalBar"
                data={chartDataBar} options={ customOptions }
              />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default CustomChart2