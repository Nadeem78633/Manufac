import React from "react";
import data from "../data/data.json";
import ReactEcharts from "echarts-for-react";

const BarChart = () => {
  const alcoholCategories = Array.from(
    new Set(data.map((wine) => wine["Alcohol"]))
  );

  const option = {
    xAxis: {
      type: "category",
      data: alcoholCategories,
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        data: alcoholCategories.map((alcohol) => {
          const wines = data.filter((wine) => wine["Alcohol"] === alcohol);
          const minMagnesium = Math.min(
            ...wines.map((wine) => wine["Magnesium"])
          );
          return minMagnesium;
        }),
        type: "bar",
      },
    ],
  };
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};

export default BarChart;
