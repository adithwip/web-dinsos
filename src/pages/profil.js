import React from "react"
import axios from "axios"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PageContainer from "../layouts/PageContainer"
import Container from "../layouts/Container"
import Item from "../layouts/Item"

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`
const NavButton = styled.a`
  padding: 8px 12px;
  border-radius: 20px;
  width: 300px;
  margin: 0 4px;
  border: 1px solid gray;
`

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: `300px`,
    fontWeight: `bold`
  },
}));


class ProfilPage extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/profile`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataJson, error, loading } = this.state

    return (
      <Layout
        noGrid
        siteTitle="Profil"
        siteDescription="Will provide my readers about myself"
      >
        <h2>Profil</h2>

        <VerticalTabs data={ dataJson } />

      </Layout>
    )
  }
}

function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dataJson = props.data

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Tugas dan Fungsi" {...a11yProps(0)} style={{ width:'300px' }} />
        <Tab label="Struktur Organisasi" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h3 id="tugas">Tugas</h3>
        <div
          dangerouslySetInnerHTML={{ __html: !!dataJson && dataJson.tasks }}
        />

        <h3 id="fungsi">Fungsi</h3>
        <div
          dangerouslySetInnerHTML={{ __html: !!dataJson && dataJson.functions }}
        />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h3 id="struktur">Struktur Organisasi</h3>
        <img src={!!dataJson && dataJson.structure} width="100%" />
      </TabPanel>

    </div>
  );
}

export default ProfilPage
