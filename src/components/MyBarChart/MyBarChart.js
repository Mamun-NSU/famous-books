import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useData from "../../hooks/useData";
import "./MyBarChart.css";

const MyBarChart = () => {
  const [infos, setInfos] = useData();
  return (
    <div className="bar-chart">
      <h1>BarChart of investment and revenue against month</h1>

      <BarChart width={730} height={250} data={infos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
