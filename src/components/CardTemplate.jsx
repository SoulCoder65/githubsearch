import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: '5px 5px 3px 0px rgba(50, 50, 50, 0.75)',
    },
    h4:{
      fontWeight:"bold",
      margin:"0",
      padding:"0"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));

const CardTemplate=({data})=>{
    const classes = useStyles();

    return<>
    <Grid item xs={12} sm={3}>
          <Paper style={{borderLeft:`5px solid ${data["color"]}`}} className={classes.paper}>
            <div className="card-interior-css">
            <Avatar  style={{backgroundColor:`${data["color"]}`}}>
            {data["icon"]}
            </Avatar>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h4 className={classes.h4}>{data["value"]}</h4>
                <span>{data["span"]}</span>
            </div>
            </div>

          </Paper>
        </Grid>

    </>
}
export default CardTemplate