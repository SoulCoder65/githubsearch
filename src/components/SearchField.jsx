import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css"
import Button from '@material-ui/core/Button';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import {UserData} from "./../context"
import {useContext} from "react"
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))
const SearchField=()=>{
    const {getGithubDetails,isError}=useContext(UserData);
    console.log(isError);
    const[username,setUsername]=useState("");
    const classes = useStyles();

    const onButtonClick=()=>{
      getGithubDetails(username);
    }
    

return<>
   <div className="search-field-div">
   {isError&&<span style={{color:"red",fontWeight:"bold"}}>User Not Found</span>}
   <br/>
   <TextField
    className={classes.offset} 
          id="filled-textarea"
          label="Search User"
          placeholder="User name"
          multiline
          variant="filled"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
    <Button 
    variant="contained"
    color="primary"
    id="search-btn"
    endIcon={<SearchTwoToneIcon/>}
    onClick={onButtonClick}
    >
  Search
</Button>
   </div>
</>
}
export default SearchField