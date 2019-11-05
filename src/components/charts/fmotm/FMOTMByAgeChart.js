import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"

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
    const api = "http://ppds.pusdatin-dinsos.jakarta.go.id/api/age/2019";
    axios
    //   .get(api, { crossdomain: true })
      .get(`https://api.myjson.com/bins/tlkz4`, { crossdomain: true })
      .then(result => {
        console.log(api, result)
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
    const { dataJson, error, loading } = this.state

    const extractData = (type, dataFromState) => {
        if (type === "age") {
            return ['0 - 4', '5 - 19', '20 - 64', '> 65']
        }

        if (type === "total") {
            console.log('total', dataFromState)
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
          backgroundColor: [ '#b2ffb2', '#00ff00', '#009900', '#004c00' ],
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
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default FMOTMByAgeChart