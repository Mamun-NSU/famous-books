import React from "react";
import { PieChart } from "recharts";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import "./Dashboard.css";

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <MyAreaChart></MyAreaChart>
      <MyLineChart></MyLineChart>
      <MyBarChart></MyBarChart>
      <MyPieChart></MyPieChart>
    </div>
  );
};

export default Dashboard;
