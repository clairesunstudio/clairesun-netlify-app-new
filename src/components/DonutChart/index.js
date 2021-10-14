import React from 'react'
import {
  Tooltip,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
  Cell,Text
} from "recharts";
import './index.scss'

const DonutChart = ({children}) => {
  const color = ["#23A6D5", "#CFD8DC"]
  const data = [
    { data: [{name: "AI", value: 100, size:'lg'},{ value: 0}]},
    { data: [{name: "PS", value: 95, size:'lg'},{ value: 5}]},
    { data: [{name: "AE", value: 70, size:'lg'},{ value: 30}]},
    { data: [{name: "ID", value: 70, size:'lg'},{ value: 30}]},
    { data: [{name: "XD", value: 100, size:'lg'},{ value: 0}]},
    { data: [{name: "Invision", value: 90, size:'md'},{ value: 10}]},
    { data: [{name: "Sketch", value: 80, size:'md'},{ value: 20}]},
    { data: [{name: "Optimal Workshop", value: 80, size:'sm'},{ value: 20}]},
  ];
    return (
      <div className="dash_container">
        {data.map((chart, i) =>
          <div className="pie-wrap">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={chart.data}
                  outerRadius={46}
                  innerRadius={40}
                  startAngle={90}
                  endAngle={450}
                >
                  {color.map((chart, i) => <Cell key={i} fill={chart} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className={`label-wrap ${chart.data[0].size}`} >
              <p>
              {chart.data[0].name}
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default DonutChart
