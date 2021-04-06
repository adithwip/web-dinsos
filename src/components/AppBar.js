import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import PersonIcon from "@material-ui/icons/Person"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}))

const HeaderAppBar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    open: false,
  })

  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState(prevState => ({
      ...prevState,
      open: !prevState.open,
    }))
  }

  const drawerContent = (
    <Grid
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
      direction="column"
      justify="space-around"
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Beranda" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/profil">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/berita">
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Berita" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/infografis">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Infografis" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/unduhan">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Unduhan" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/#kontak">
          <ListItem button>
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Kontak" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/data">
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Pusat Data" />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </Grid>
  )

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" className={classes.title}>
              <Typography style={{ color: "white" }} variant="h6">
                Pusdatin Jamsos
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer open={state.open} onClose={toggleDrawer()}>
        {drawerContent}
      </Drawer>
    </>
  )
}

export default HeaderAppBar
