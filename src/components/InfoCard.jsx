import React from "react"
import {useContext} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardTemplate from "./CardTemplate"
import "../index.css"
import {UserData} from "./../context"

// icons
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));
const InfoCard=()=>{
    const{userinfo}=useContext(UserData);
    const {public_repos,public_gists,followers,following}=userinfo;
    const style=[
      {
        'icon':<BookRoundedIcon/>,
        'value':public_repos,
        'span':"Repos",
        'color':"pink"
      },
      {
        'icon':<PeopleRoundedIcon/>,
        'value':followers,
        'span':"Followers",
        'color':"green"
      },
      {
        'icon':<PersonAddRoundedIcon/>,
        'value':following,
        'span':"Following",
        'color':"blue"
      },
      {
        'icon':<DeveloperModeRoundedIcon/>,
        'value':public_gists,
        'span':"Gists",
        'color':"orange"
      },
    ]

    console.log(followers);
    const classes = useStyles();

    return<>
        <div className={classes.root}>
        <Grid container spacing={3}>
          <CardTemplate data={style[0]}/>
          <CardTemplate data={style[1]}/>
          <CardTemplate data={style[2]}/>
          <CardTemplate data={style[3]}/>
        
        </Grid>
        </div>
    </>
}
export default InfoCard