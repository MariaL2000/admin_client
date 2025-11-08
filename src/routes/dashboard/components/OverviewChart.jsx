import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "@/constants";

const LegendExample = ({ isAnimationActive = true }) => (
  <div className="w-full h-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          name="pv of pages"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          isAnimationActive={isAnimationActive}
        />
        <Line
          name="uv of pages"
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          isAnimationActive={isAnimationActive}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LegendExample;
