"use client";
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import reve from "../data/revenue.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Graph = () => {
  return (
    <div className="dataCard">
      <Doughnut
        data={{
          labels: reve.map((ele) => {
            return ele.label;
          }),
          datasets: [
            {
              label: "Revenue",
              data: reve.map((ele) => {
                return ele.revenue;
              }),
              backgroundColor: "red",
              borderColor: "blue",
            },
            {
              label: "cost",
              data: reve.map((ele) => {
                return ele.cost;
              }),
              backgroundColor: "green",
              borderColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
