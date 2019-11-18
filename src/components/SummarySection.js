import React from "react"
import axios from "axios"
import styled from "styled-components"
// import { Link } from "gatsby"
import { Link } from "@reach/router"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';

import Typography from "@material-ui/core/Typography"

const StyleContainer = styled(Grid)`
  background-color: #f6f6f6;
  padding: 12px 32px;
  margin-bottom: 12px;
`

const NewsCard = styled(Card)`
  & div {
    width: 100%;
    padding: 16px;
  }

  & :hover {
    background-color: #f0f0f0;
  }
`

class SummarySection extends React.Component {
  state = { dataJson: null, error: false, loading: false, page: 1 }

//   fetchData = () => {
//     this.setState({ loading: true })
//     axios
//       .get(`http://104.43.9.40:8089/api/v1/cms/news?perpage=8`, {
//         crossdomain: true,
//       })
//       .then(result => {
//         const { data } = result
//         this.setState({ dataJson: data, loading: false })
//       })
//       .catch(error => {
//         this.setState({ loading: false, error: error })
//       })
//   }

  componentDidMount() {
    // this.fetchData()
  }

  render() {
    const { dataJson } = this.state
    const daftarBerita = !!dataJson && dataJson.data

    return (
      <StyleContainer container spacing={3} id="summary">
        <Grid item xs={12}>
          <h2>Data Terpadu Kesejahteraan Sosial</h2>
        </Grid>

        <Grid container item spacing={3}>
          <Grid container item xs={12} md={9} direction="column">
            <Grid container item xs direction="row" justify="space-between" alignItem="stretch">
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"24px", textAlign:"center", height:"120px" }} align="justify"> 
                        <PeopleIcon/> <br/> <Typography>406.435 DTKS</Typography>
                    </Card>
                </Grid>
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"24px", textAlign:"center", height:"120px" }} align="justify"> 
                        <PersonIcon /> <br/> <Typography>1.571.352 ART</Typography>
                    </Card>
                </Grid>
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"24px", textAlign:"center", height:"120px" }} align="justify"> 
                        <HomeIcon/> <br/> <Typography>xxx.xxx</Typography>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs direction="row" justify="space-between" alignItem="stretch">
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"16px", textAlign:"center", height:"150px" }} align="justify"> 
                        <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Jakarta Pintar</Typography>
                    </Card>
                </Grid>
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"16px", textAlign:"center", height:"150px" }} align="justify"> 
                        <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Lansia Jakarta</Typography>
                    </Card>
                </Grid>
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"16px", textAlign:"center", height:"150px" }} align="justify"> 
                        <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Jakarta Mahasiswa Unggul</Typography>
                    </Card>
                </Grid>
                <Grid item xs style={{ padding:"8px" }}  >
                    <Card style={{ padding:"16px", textAlign:"center", height:"150px" }} align="justify"> 
                        <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Pemenuhan Kebutuhan Dasar Anak</Typography>
                    </Card>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            
          </Grid>
        </Grid>

      </StyleContainer>
    )
  }
}

export default SummarySection