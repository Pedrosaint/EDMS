import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { data } from '@/utilis/data-arrays';
import { useState } from 'react';

const quarters = ["Q1", "Q2", "Q3", "Q4"];
const DashboardBarchart = () => {
    const [selectedQuarter, setSelectedQuarter] = useState("Q1");
  
    const filteredData = data.filter(
      (item) => item.quarter === selectedQuarter
    );
  return (
    <div className="w-full h-100 bg-[#eaedf4] p-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold mb-4">Documents by Department</h2>
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
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="documents" fill="#374151" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardBarchart;
