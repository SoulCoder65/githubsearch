import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {UserData} from "./../context"
import {useContext} from "react"
// Resolves charts dependancy
charts(FusionCharts);



const MostForked=()=>{
    const {repoinfo}=useContext(UserData);
    let mostforked=repoinfo.reduce((total,data)=>{
       const {name,forks_count}=data;
       total[name]={label:name,value:forks_count}
       return total;
        
    },{});
    mostforked=Object.values(mostforked).sort((a,b)=>{
        return b.value-a.value;
    }).slice(0,10).reverse()
    const dataSource = {
        chart: {
          caption: "Most Forked Repos",
          yaxisname: "Forks",
          xaxisname:"Repos",
          xAxisNameFontSize: "15",
          yAxisNameFontSize: "15",
          aligncaptionwithcanvas: "0",
          plottooltext: "<b>$dataValue</b> Forks",
          theme: "fusion"
        },
        data: mostforked
      };
    return (
      <ReactFusioncharts
        type="bar2d"
        width="100%"
        height="600"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }

export default MostForked;