import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ReactFC from 'react-fusioncharts';
import {useContext} from "react"
import {UserData} from "./../context"
// Resolves charts dependancy
charts(FusionCharts);
ReactFC.fcRoot(FusionCharts, CandyTheme);



const PopularRepo=()=> {
    const {repoinfo}=useContext(UserData)
    let popularepo=repoinfo.reduce((total,data)=>{
        const {name,stargazers_count}=data;
        total[name]={label:name,value:stargazers_count}
        return total
    },{})
    popularepo=Object.values(popularepo).sort((a,b)=>{
        return b.value-a.value;
    }).slice(0,6).reverse()
    
    const dataSource = {
        chart: {
          caption: "Popular Repos",
          
          yaxisname: "No. of Stars",
          xaxisname:"Repos",
          decimals: "1",
          theme: "candy"
        },
        data: popularepo 
      };
    return (
      <ReactFusioncharts
        type="column3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
export default PopularRepo
