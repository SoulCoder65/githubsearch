import React from "react"
import {createContext,useState} from "react"
import UserInfo from "./Dumy/UserInfo"
import followers from "./Dumy/Followers"
import Repo from "./Dumy/Repo"
import axios from "axios"
const UserData=createContext();

const ContextData=({children})=>{
 const [userinfo,setUserInfo]=useState(UserInfo)   
 const [Followersinfo,setFollowersInfo]=useState(followers)   
 const [Repoinfo,setRepoInfo]=useState(Repo)   
 const [isError,setisError]=useState(false);
 const [isLoading,setIsLoading]=useState(false)
 const [limit,setLimit]=useState("60/60")
//  Get APi Request
const getGithubDetails=(name)=>{
    setIsLoading(true);
    axios(`https://api.github.com/users/${name}`).then((data)=>{
        setUserInfo(data.data)
        setisError(false)
        setIsLoading(false)
    }).catch((e)=>{
        setisError(true)
        setIsLoading(false)
    });
    axios(`https://api.github.com/users/${name}/repos?per_page=100`).then((data)=>{
        setRepoInfo(data.data)
    });
    axios(`https://api.github.com/users/${name}/followers`).then((data)=>{
        setFollowersInfo(data.data)
    });
    axios(`https://api.github.com/rate_limit`).then((data)=>{
    const{limit,remaining}=data.data.rate
    setLimit(`${remaining}/${limit}`)
    
    // setFollowersInfo(data.data)
    });


}

//  Get APi Request End

 return <>
 
     <UserData.Provider value={{userinfo:userinfo,followersinfo:Followersinfo,repoinfo:Repoinfo,getGithubDetails:getGithubDetails,isError:isError,isLoading:isLoading,limit:limit}} >
        {children}
    </UserData.Provider>
    </>
}
export {ContextData,UserData}