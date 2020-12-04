import React from "react"
import {useContext} from "react"
import {UserData} from "./../context"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Card
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import { Link } from "@material-ui/core";


const theme = createMuiTheme();

theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};
const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
    },
    button: {
        margin: theme.spacing(1),
      },
    bio:{
        fontFamily:"'Roboto', sans-serif;",
        
    },
    
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
}));
const UserCard=()=>{
  const{userinfo}=useContext(UserData);

    const {avatar_url,html_url,name,location,email,bio,twitter_username,blog}=userinfo;
    const classes = useStyles();

    return<>
    <Card className={classes.root}>
    <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={avatar_url} className={classes.large} />
        }
        action={
            <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            href={html_url}
            >
        Follow
      </Button>        }
        title={name}
        subheader={twitter_username|| "Not Available"}
    />
    <CardContent>
    <ThemeProvider theme={theme}>
    <Typography variant="h5" component="h2" className={classes.bio}>
        {bio}
    </Typography>
    </ThemeProvider>
    {/* List */}
    <List component="nav" aria-label="main mailbox folders">
    <ListItem >
          <ListItemIcon>
            <EmailRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={email|| "Not Available"} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <LocationOnRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={location|| "Not Available"} />
        </ListItem>
        <ListItem  >
          <ListItemIcon>
            <LinkRoundedIcon />
          </ListItemIcon>
        <Link href={blog} target="blank" style={{textDecoration:"none"}}> 
        <ListItemText primary={blog|| "Not Available"} />
        </Link>
        </ListItem>
    </List>
    </CardContent>
    </Card>

    </>
}
export default UserCard