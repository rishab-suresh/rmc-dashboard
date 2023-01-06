import React from "react";
import { PieChart, Pie } from "recharts";
import "./Details.css";

export const Details = ({activityData}) => {
  // Extract the activity data from the props
 

  console.log(activityData);
  // Create an array of objects for the pie chart data
  const pieChartData = [
    {
      name: "Call Duration",
      value: activityData.call_duration,
    },
    {
      name: "Break Duration",
      value: activityData.break_duration,
    },
    {
      name: "Meeting Duration",
      value: activityData.meetings_duration,
    },
    {
      name: "Idle Time",
      value: activityData.idle_Time,
    },
  ];

  return (
    
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Details</h2>
        </div>
       
        <PieChart width={730} height={250}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill={["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"]}
          />
        </PieChart>
      </div>
    </div>
  );
};
