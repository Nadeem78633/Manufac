import ReactEcharts from "echarts-for-react";
import React from "react";
import data from "../data/data.json";
function LineChart() {
  const option = {
    xAxis: {
      type: "value",
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        data: data.map((wine) => [wine["Flavanoids"], wine["Ash"]]),
        type: "line",
      },
    ],
  };

  return <ReactEcharts option={option} />;
}
export default LineChart;
