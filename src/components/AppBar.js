import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

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

import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import NewsTwoToneIcon from "@material-ui/icons/ImportContactsTwoTone"

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
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Tentang Dinsos" />
          </ListItem>
        </Link>
        <Divider />

        <Link to="/blog">
          <ListItem button>
            <ListItemIcon>
              <NewsTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Pusat Berita" />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  )
    // HAHAHAHAHAHA
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
                Dinas Sosial DKI
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
