import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"

import Container from "../../../layouts/Container"
import Item from "../../../layouts/Item"

class FMOTMByGenderChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchDataAPI = () => {
    this.setState({ loading: true })
    const api = "http://ppds.pusdatin-dinsos.jakarta.go.id/api/gender/2019";
    axios
      .get(`https://api.myjson.com/bins/14sj5c`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        console.log(api, result)
        // console.log("http://ppds.pusdatin-dinsos.jakarta.go.id/api/gender/2019",data)
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
    const { dataJson, error, loading } = this.state

    const extractData = (type, dataFromState) => {
      let arr = []
      !!dataFromState && dataFromState.forEach(data => {
          type === "gender" && arr.push(data.gender)
          type === "total" && arr.push(data.total)
        })
      return arr
    }

    const chartDataDoughnut = {
      labels: extractData('gender', dataJson),
      datasets: [
        {
          label: extractData('gender', dataJson),
          backgroundColor: [
            '#36A2EB',
            '#ffc0cb',
          ],
          data: extractData('total', dataJson)
        }
      ]
    }

    const customOptions = {
      legend : { 
        labels : {
          fontColor:"#fff",
        },
        position: 'right'
      }
    }

    return (
      <ChartCard title="FMOTM Berdasarkan Jenis Kelamin">
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
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default FMOTMByGenderChart