import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Doughnut } from "react-chartjs-2"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataPresentasiSARPChart extends React.Component {
  state = {
    dataP3S: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/12ipi9`, {
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

    const dataP3sArray = (type, dataFromState) => {
      let arr = []
      !!dataFromState &&
        dataFromState.forEach(data => {
          type === "area" && arr.push(data.wilayah)
          type === "total" && arr.push(data.total)
        })
      return arr
    }

    const chartDataDoughnut = {
      labels: dataP3sArray('area', dataP3S),
      datasets: [
        {
          label: 'Jumlah Petugas P3S Tahun 2019',
          backgroundColor: [
          '#1572E8',
          '#F03A47',
          '#F0A202',
          '#06D6A0',
          '#FFCE56',
          '#36A2EB',
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#36A2EB',
          '#FFCE56',
          '#FFCE56',
          '#FF6384',
          ],
          data: dataP3sArray('total', dataP3S)
        }
      ]
    }

    return (
      <ChartCard title="Data Presentasi SARP" to="data/data-petugas-p3s">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Doughnut
                data={chartDataDoughnut}
              />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPresentasiSARPChart