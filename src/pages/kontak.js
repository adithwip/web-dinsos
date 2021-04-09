import React from "react"
import axios from "axios"

import Layout from "../layouts/Layout"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import PhoneIcon from "@material-ui/icons/Phone"
import BusinessIcon from "@material-ui/icons/Business"

class KontakPage extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })
    axios
      .get(`https://siaplus-pusdatin-dinsos.jakarta.go.id/api/v1/cms/profile`, {
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
    const { dataJson } = this.state

    const address = !!dataJson && dataJson.address
    const email = !!dataJson && dataJson.email
    const phoneNumber = !!dataJson && dataJson.phone_number
    const twitter = !!dataJson && dataJson.twitter
    const facebook = !!dataJson && dataJson.facebook

    return (
      <Layout siteTitle="Kontak" siteDescription="Kontak & Hubungi Kami">
        <h2>Kontak</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <div>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary={address} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={phoneNumber} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TwitterIcon />
                  </ListItemIcon>
                  <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="Twitter Dinsos DKI" />
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>
                  <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="Facebook Dinsos DKI" />
                  </a>
                </ListItem>
              </List>
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <iframe
              title="lokasi pusdatin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.819982213951!2d106.83455031413696!3d-6.154859362039576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59245fac57d%3A0x43046ee5708f9c5!2sPUSDATIN%20JAMSOS!5e0!3m2!1sen!2sid!4v1570860514287!5m2!1sen!2sid"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
            ></iframe>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default KontakPage
