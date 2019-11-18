import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../layouts/Layout"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}))

const LoginPage = () => {
  const classes = useStyles()

  return (
    <Layout siteTitle="Login - Pusdatin Jamsos" siteDescription="Login Page">
      <div
        style={{
          width: "50%",
          backgroundColor: "snow",
          padding: "20px 32px",
          marginTop: "30px",
          marginLeft: "25%",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Login</h2>

        <div style={{ width: "100%" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item style={{ width: "95%" }}>
              <TextField
                id="input-with-icon-grid"
                label="Username"
                className={classes.textField}
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ width: "100%" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item style={{ width: "95%" }}>
              <TextField
                id="input-with-icon-grid"
                label="Password"
                type="password"
                className={classes.textField}
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ textAlign: "right", marginTop: "15px" }}>
          <a href="https://google.com" style={{ float: "left", marginTop: "20px" }}>
            Lupa Password ?
          </a>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
