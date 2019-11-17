import React from "react"

import Container from "../layouts/Container"

import styled from "styled-components"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PhoneIcon from "@material-ui/icons/Phone"
import BusinessIcon from "@material-ui/icons/Business"

const StyleContainer = styled(Container)`
    color : white;
    background-color: #0D47A1;
    padding : 12px 32px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}`

const StyledIFrame = styled.iframe`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const KontakSection = props => (
  <StyleContainer justify="center" id={props.id}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <h2 style={{ textAlign: "center" }}>Kontak</h2>
        <br />
      </Grid>
      <Grid item xs={12} md={5}>
        <div>
          <List>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Jl. Gunung Sahari X No.31, RT.2/RW.3, Gn. Sahari Utara, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailOutlineIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="pusdatinjamsosdki@jakarta.go.id" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="021-22684824" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TwitterIcon style={{ color: "white" }} />
              </ListItemIcon>
              <a
                href="https://twitter.com/dinso"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <ListItemText primary="Twitter Dinsos DKI" />
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon style={{ color: "white" }} />
              </ListItemIcon>
              <a
                href="https://id-id.facebook.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <ListItemText primary="Facebook Dinsos DKI" />
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InstagramIcon style={{ color: "white" }} />
              </ListItemIcon>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <ListItemText
                  primary="Instagram Pusdatin Jamsos"
                  style={{ color: "white" }}
                />
              </a>
            </ListItem>
          </List>
        </div>
      </Grid>

      <Grid item xs={12} md={7}>
        <StyledIFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.819982213951!2d106.83455031413696!3d-6.154859362039576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59245fac57d%3A0x43046ee5708f9c5!2sPUSDATIN%20JAMSOS!5e0!3m2!1sen!2sid!4v1570860514287!5m2!1sen!2sid"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
        />
      </Grid>
      <br />
      <br />
    </Grid>
  </StyleContainer>
)

export default KontakSection
