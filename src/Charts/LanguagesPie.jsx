import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {UserData} from "./../context"
import {useContext} from "react"



// Resolves charts dependancy
charts(FusionCharts);


const LanguagePie=()=> {
    // Get Languages used in sorted order(Top five) 
    const {repoinfo}=useContext(UserData);
    let languages=repoinfo.reduce((total,item)=>{
        const {language}=item;
        if(!language) return total;
        if(!total[language]){
            total[language]={label:language,value:1}
        }
        else{
            total[language]={
                ...total[language],
                value:total[language].value+1,
            };
        }
        return total;
    },{})
    languages=Object.values(languages).sort((x,y)=>{
        return y.value-x.value;
    }).slice(0,6)
    const dataSource = {
        chart: {
          caption: "Most Used Languages",
          showvaluesintooltip: "1",
          showPercentValues:"1",
          enablemultislicing: "1",
          enableSmartLabels:"1",
          showLegend:"1",
        
          theme: "fusion"
        },
        data: languages
      };
      
    // Get Languages used in sorted order(Top five) End 
    

    return (
     <ReactFusioncharts
        type="pie3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
          );
  }
export default LanguagePie
