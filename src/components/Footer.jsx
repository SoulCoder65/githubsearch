import React from "react"
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer=()=>{
    const newdate=new Date();

    return<>
        <div style={{textAlign:"center"}}>
            <h6>Copyright &copy;  {newdate.getUTCFullYear()} All Right Reserved -Akshay Saxena</h6>
        </div>
    </>
}
export default Footer