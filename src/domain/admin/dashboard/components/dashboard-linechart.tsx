import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";
import { lineChartData } from "@/utilis/data-arrays";

const quarters = ["Q1", "Q2", "Q3", "Q4"];

const DashboardLinechart = () => {
  const [selectedQuarter, setSelectedQuarter] = useState("Q1");

  const filteredData = lineChartData.filter(
    (item) => item.quarter === selectedQuarter
  );

  return (
    <div className="w-full h-100 bg-[#eaedf4] p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Documents Added Over Time</h2>
        <select
          value={selectedQuarter}
          onChange={(e) => setSelectedQuarter(e.target.value)}
          className="p-2 rounded-md border border-gray-400 bg-[#eaedf4] text-sm cursor-pointer"
        >
          {quarters.map((qtr) => (
            <option key={qtr} value={qtr}>
              {qtr}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="documents"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardLinechart;
