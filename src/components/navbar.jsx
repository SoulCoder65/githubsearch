import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import "../index.css"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))
const Navbar=()=>{
    const classes = useStyles();

    return<>
    <AppBar position="fixed" className="Appbar-css">
        <div className="navbar-title-div">
        <Typography id="nav-typography">
            Github Stats 
          </Typography>
        </div>
    </AppBar>
    <div className={classes.offset} />


    </>
}
export default Navbar