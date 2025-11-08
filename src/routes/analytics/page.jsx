import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import OverviewofSellers from "../dashboard/components/OverviewofSellers";

const data = [
  { month: "Jan", users: 400, sessions: 300 },
  { month: "Feb", users: 800, sessions: 600 },
  { month: "Mar", users: 700, sessions: 900 },
  { month: "Apr", users: 1200, sessions: 1000 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1
        className="text-3xl font-semibold"
        style={{ color: "var(--color-text)" }}
      >
        Analytics
      </h1>

      {/* --- Users vs Sessions --- */}
      <div
        className="rounded-lg border shadow flex flex-col h-[420px]"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center gap-2 p-4">
          <p className="font-medium" style={{ color: "var(--color-text)" }}>
            Users vs Sessions
          </p>
        </div>
        <div className="flex-1 p-4 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Overview of Sellers --- */}
      <div
        className="rounded-lg border shadow flex flex-col h-[420px]"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center gap-2 p-4">
          <p className="font-medium" style={{ color: "var(--color-text)" }}>
            Overview of Sellers
          </p>
        </div>
        <div className="flex-1 p-4 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <OverviewofSellers />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
