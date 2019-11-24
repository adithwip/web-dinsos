import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"

import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWheelchair,
  faChild,
  faGraduationCap,
  faUser,
  faUsers,
  faHome,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons"

const StyleContainer = styled(Grid)`
  background-color: #fff;
  padding: 12px 32px;
  margin-bottom: 12px;
`

const StyledCard = styled(Card)`
  padding: 16px 24px;
  text-align: center;
  background-color: #f9f5ff;
`

const StyledLabel = styled.div`
  padding: 4px 8px;
  background-color: #f2545b;
  color: white;
  width: 140px;
  border-radius: 8px;
`

const dataTerpaduKesejahteraanSosial = [
  {
    name: "DTKS",
    data: 406435,
    icon: faUsers,
  },
  {
    name: "Anggota Rumah Tangga",
    data: 1571352,
    icon: faUser,
  },
  {
    name: "Rumah",
    data: 490800,
    icon: faHome,
  },
  {
    name: "Kartu Jakarta Pintar",
    data: 558385,
    icon: faCreditCard,
  },
  {
    name: "Kartu Lansia Jakarta",
    data: 128614,
    icon: faCreditCard,
  },
  {
    name: "Kartu Jakarta Mahasiswa Unggul",
    data: 8024,
    icon: faGraduationCap,
  },
  {
    name: "Pemenuhan Kebutuhan Dasar Anak",
    data: 82476,
    icon: faChild,
  },
  {
    name: "Pemenuhan Kebutuhan Dasar Disabilitas",
    data: 82476,
    icon: faWheelchair,
  },
]

const SummaryCard = ({ icon, data, label }) => {
  return (
    <StyledCard>
      <Grid
        container
        direction="column"
        spacing={1}
        alignContent="center"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <FontAwesomeIcon
            icon={icon}
            size="3x"
            style={{
              marginBottom: "8px",
              color: "#0D1321",
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">{label}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
            <StyledLabel>
              {new Intl.NumberFormat("id-ID").format(data)}
            </StyledLabel>
          </Typography>
        </Grid>
      </Grid>
    </StyledCard>
  )
}

const SummarySection = () => {
  return (
    <StyleContainer container spacing={3} id="summary">
      <Grid item xs={12}>
        <h2>Data Terpadu Kesejahteraan Sosial</h2>
      </Grid>

      <Grid container item spacing={3} align="flex-start">
        <Grid item xs={12} md={8}>
          <Grid container>
            {dataTerpaduKesejahteraanSosial.map(data => {
              return (
                <Grid item xs={12} md={4} style={{ padding: "8px" }}>
                  <SummaryCard
                    label={data.name}
                    data={data.data}
                    icon={data.icon}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialMediaSection />
        </Grid>
      </Grid>
    </StyleContainer>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const SocialMediaSection = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper square>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="socmed tabs"
            style={{ backgroundColor: "#0d47a1" }}
          >
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
