import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useData from "../../hooks/useData";
import "./MyBarChart.css";

const MyBarChart = () => {
    const [infos, setInfos] = useData();
    return (
        <div>
            <h1>This is MyBarChart Page.</h1>

            <div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={infos}>
                        <Bar dataKey="sell" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MyBarChart;
