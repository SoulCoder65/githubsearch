import React from "react"
import {UserData} from "./../context"
import {useContext} from "react"
const Rate=()=>{
    const {limit}=useContext(UserData)
    console.log(limit);
    return<>
        <h2 style={{textAlign:"center"}}><span style={{color:"#dc143c",fontWeight:"bold"}}>Search Limit</span> {limit}</h2>
    </>
}
export default Rate