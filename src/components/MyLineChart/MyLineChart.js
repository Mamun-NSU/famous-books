import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useData from "../../hooks/useData";
import "./MyLineChart.css";

const MyLineChart = () => {
    const [infos, setInfos] = useData();
    return (
        <div>
            <LineChart width={500} height={200} data={infos}>
                {/* <Line dataKey={"investment"}></Line> */}
                <Line dataKey={"sell"}> </Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>

        </div>
    );
};

export default MyLineChart;
