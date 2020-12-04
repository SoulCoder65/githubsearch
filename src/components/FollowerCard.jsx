import React from "react"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {useContext} from "react"
import {UserData} from "./../context"
import "./../index.css"


const FollowerCard=()=>{
    const {followersinfo}=useContext(UserData);

    return<>
        <Paper style={{overflowY:"auto",maxHeight:"320px",minHeight:"200"}} >
            <List >
            {followersinfo.map((data,index)=>{
                return (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={data["avatar_url"]}/>
                                
                        </ListItemAvatar>
                                
                                        
                        <ListItemText primary={data["login"]} secondary="ABC" ></ListItemText>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href={data["html_url"]}
                                    target="blank"
                                >
                                  View
                                </Button> 
                        </ListItem>
                        
                        )
            })}            
            </List>
        </Paper>
    </>
}
export default FollowerCard