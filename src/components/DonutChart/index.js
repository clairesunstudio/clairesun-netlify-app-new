import React from 'react'
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell
} from "recharts";
import './index.scss'

const color = ["#23A6D5", "#CFD8DC"];

const DonutChart = ({ data }) => {
  const charts = data && data.map((d) => (
    [{...d}, { value: 100 - d.value}]
  ))
    return (
      <div className="dash_container">
        {charts.map((chart, i) =>
          <div className="pie-wrap" key={`chart_${i}`}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={chart}
                  outerRadius={46}
                  innerRadius={40}
                  startAngle={90}
                  endAngle={450}
                >
                  {color.map((chart, index) => <Cell key={`cell_${i}`} fill={chart} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className={`label-wrap ${chart[0].size}`} >
              <p>
              {chart[0].name}
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default DonutChart
