import React from "react"
import axios from "axios"
import styled from "styled-components"
// import { Link } from "gatsby"
import { Link } from "@reach/router"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';

import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const StyleContainer = styled(Grid)`
  background-color: #fff;
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

  componentDidMount() {

  }

  render() {
    const { dataJson } = this.state
    const daftarBerita = !!dataJson && dataJson.data

    return (
      <StyleContainer container spacing={3} id="summary">
        <Grid item xs={12}>
          <h2>Data Terpadu Kesejahteraan Sosial</h2>
        </Grid>

        <Grid container item spacing={3} align="flex-start">
          <Grid item xs={12} md={8}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", flexWrap:"wrap", flexFlow:"row wrap", alignContent:"flex-end" }}>
            <Grid item xs={12} md={4} style={{ padding:"8px" }}  >
                <Card style={{ padding:"24px", textAlign:"center", height:"110px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PeopleIcon/> <br/> <Typography>406.435 DTKS</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} style={{ padding:"8px" }}  >
                <Card style={{ padding:"24px", textAlign:"center", height:"110px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PersonIcon /> <br/> <Typography>1.571.352 ART</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} style={{ padding:"8px" }}  >
                <Card style={{ padding:"24px", textAlign:"center", height:"110px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <HomeIcon/> <br/> <Typography>xxx.xxx</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} style={{ padding:"8px" }}  >
                <Card style={{ padding:"16px", textAlign:"center", height:"150px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Jakarta Pintar</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} style={{ padding:"8px" }}  >
                <Card style={{ padding:"16px", textAlign:"center", height:"150px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Lansia Jakarta</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} style={{ padding:"8px" }}  >
                <Card style={{ padding:"16px", textAlign:"center", height:"150px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Kartu Jakarta Mahasiswa Unggul</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} style={{ padding:"8px" }}  >
                <Card style={{ padding:"16px", textAlign:"center", height:"150px", backgroundColor:"#f8f8ff" }} align="justify"> 
                    <PaymentIcon /> <br/> <Typography>x.xxx.xxxx <br/>Pemenuhan Kebutuhan Dasar Anak</Typography>
                </Card>
            </Grid>
          </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <SocialMediaSection />
          </Grid>
        </Grid>

      </StyleContainer>
    )
  }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const SocialMediaSection = () => {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
      return (
        <Paper square>
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="socmed tabs" style={{ backgroundColor:"#0d47a1" }}>
                    <Tab label="Instagram" {...a11yProps(0)} />
                    <Tab label="Facebook" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} style={{ minHeight: "350px" }}>
                Instagram
            </TabPanel>
            <TabPanel value={value} index={1} style={{ minHeight: "350px" }}>
                Facebook
            </TabPanel>
        </div>
        </Paper>
      )
  }

export default SummarySection