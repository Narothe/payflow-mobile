import GoBack from "../common/GoBack.tsx";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useEffect, useState } from "react";
import { getExchangeRatesData } from "../../api/services/Graph.ts";


const Graphs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
     getExchangeRatesData().then(res => {
       if(res != null) {
         setData(res.data);
       }
     })
       .catch(err =>{
         console.log("Error: ",err)
       })
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2,
    propsForBackgroundLines: {
      stroke: 'rgba(255, 255, 255, 0)'
    },
    useShadowColorFromDataset: false
  };
  const reversedData = data.reverse();
  const normalizedData = reversedData.map(item => ({
    date: item.date.substring(5),
    eur: item.pln / item.eur,
    usd: item.pln / item.usd,
  }));

  const eurChartData = {
    labels: normalizedData.map(item => item.date),
    datasets: [
      {
        data: normalizedData.map(item => item.eur),
        color: (opacity = 1) => `rgba(107, 67, 190, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["EUR"]
  };

  const usdChartData = {
    labels: normalizedData.map(item => item.date),
    datasets: [
      {
        data: normalizedData.map(item => item.usd),
        color: (opacity = 1) => `rgba(107, 67, 190, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["USD"]
  };

  return (
    <View>
      <GoBack title={'Graphs'} />
      <View>
        <LineChart
          data={eurChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
        />
        <LineChart
          data={usdChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
}
export default Graphs;
