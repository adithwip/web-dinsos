import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import Paper from "@material-ui/core/Paper"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
` 
const NavButton = styled.a`
  padding : 8px 12px;
  border-radius : 20px;
  width: 200px;
  margin : 0 4px;
  border : 1px solid gray;
`

const KontakPage = () => {
  
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )

  return (
    <Layout
      siteTitle="Kontak"
      siteDescription="Kontak & Hubungi Kami"
    >

      <h2>Kontak</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <div>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="pusdatinjamsosdki@gmail.com"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="021-22684824"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TwitterIcon />
                  </ListItemIcon>
                  <a href="https://twitter.com/dinsosdki1?lang=en" target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="Twitter Dinsos DKI"/>
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>
                  <a href="https://id-id.facebook.com/dinsosDKIJakarta" target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="Facebook Dinsos DKI"/>
                  </a>
                </ListItem>
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={7}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.819982213951!2d106.83455031413696!3d-6.154859362039576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59245fac57d%3A0x43046ee5708f9c5!2sPUSDATIN%20JAMSOS!5e0!3m2!1sen!2sid!4v1570860514287!5m2!1sen!2sid" width="100%" height="380" frameborder="0" allowfullscreen=""></iframe>          
        </Grid>
      </Grid>

    </Layout>
  )
}

export default KontakPage
