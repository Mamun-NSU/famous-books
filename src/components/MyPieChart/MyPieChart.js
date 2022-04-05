import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import useData from "../../hooks/useData";

import "./MyPieChart.css";

const MyPieChart = () => {
  const [infos, setInfos] = useData();

  return (
    <div className="pie-chart">
      <h1>PieChart of investment and revenue against month</h1>

      <PieChart width={730} height={250}>
        <Pie
          data={infos}
          dataKey="revenue"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={infos}
          dataKey="investment"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
