import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "@/hooks/useTheme"; // tu hook de tema

const data = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Feb", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 5000, profit: 2400 },
  { month: "Apr", revenue: 7000, profit: 3900 },
];

export default function ReportsPage() {
  const { theme } = useTheme();

  // Colores según tema
  const barColor = theme === "dark" ? "#4ade80" : "#82ca9d"; // verde
  const lineColor = theme === "dark" ? "#a78bfa" : "#8884d8"; // morado
  const gridColor = theme === "dark" ? "#374151" : "#e5e7eb"; // gris más oscuro

  return (
    <div className="p-6 space-y-6">
      <h1
        className="text-3xl font-semibold"
        style={{ color: theme === "dark" ? "#f3f4f6" : "#111827" }}
      >
        Reports
      </h1>

      <div
        className={`rounded-lg p-4 shadow`}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--color-card-bg)" : "#ffffff",
          borderColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
          borderWidth: 1,
        }}
      >
        <h2
          className="text-lg font-semibold mb-2"
          style={{ color: theme === "dark" ? "#f3f4f6" : "#111827" }}
        >
          Monthly Revenue & Profit
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                stroke={theme === "dark" ? "#f3f4f6" : "#111827"}
              />
              <YAxis stroke={theme === "dark" ? "#f3f4f6" : "#111827"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
                  borderColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
                  color: theme === "dark" ? "#f3f4f6" : "#111827",
                }}
              />
              <Bar dataKey="revenue" fill={barColor} />
              <Line
                type="monotone"
                dataKey="profit"
                stroke={lineColor}
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
