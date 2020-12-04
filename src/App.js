import React from "react"
import Navbar from "./components/navbar"
import SearchField from "./components/SearchField"
import Container from '@material-ui/core/Container';
import InfoCard from "./components/InfoCard"
import Grid from '@material-ui/core/Grid';
import UserCard from "./components/UserCard"
import Rate from "./components/Rate"
import Footer from "./components/Footer"
import FollowerCard from "./components/FollowerCard"
import LanguagePie from "./Charts/LanguagesPie"
import PopularRepo from "./Charts/PopularRepo"
import MostForked from "./Charts/MostForked"
import "./App.css"
import {UserData} from "./context"
import {useContext} from "react"
const App=()=>{
  const {isLoading}=useContext(UserData);
  return(
    <>
      <Navbar/>
      {isLoading&&<div className="spinner-css">
                                  <div className="loadingio-spinner-spinner-t9zr7aryz9c">
                                  <div className="ldio-h39kwcl0c36">
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  </div></div>
                            </div>}
         {!isLoading&&<Container maxWidth="xl">
         <Rate />

        <SearchField/>
        <InfoCard/>
        {/* User info Card + F */}
        <Grid container spacing={3} style={{marginTop:"4%"}} >
        <Grid item xs={12} md={7} className="user-info-card">
        <UserCard/>
        </Grid>
        <Grid item xs={12} md={5} className="followers-css">
        <FollowerCard/>
        </Grid>
        {/* User info Card + F End*/}
        {/* Most Used languages */}
        <Grid item xs={12} md={6} >
        <LanguagePie/>
        </Grid>
        {/* Popular Repo */}
        <Grid item xs={12} md={6} >
        <PopularRepo/>
        </Grid>
        <Grid item xs={12}   >
        <MostForked/>
        </Grid>
        <Grid item xs={12}   >
        <Footer/>
        </Grid>
      
        </Grid>

        {/* User info Card + F End*/}
      </Container>}
    </>
  )
}
export default App



