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
         console.log(res.data)
       }
     })
       .catch(err =>{
         console.log("Error: ",err)
       })
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#78797a",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#78797a", // Kolor tła wykresu - biały
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const eurChartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        data: data.map(item => item.eur),
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // kolor linii dla EUR
        strokeWidth: 2 // grubość linii
      }
    ],
    legend: ["EUR"] // legenda dla wykresu
  };

  const usdChartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        data: data.map(item => item.usd),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // kolor linii dla USD
        strokeWidth: 2 // grubość linii
      }
    ],
    legend: ["USD"] // legenda dla wykresu
  };

  return (
    <View>
      <GoBack title={'Graphs'} />

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
  );
}
export default Graphs;
