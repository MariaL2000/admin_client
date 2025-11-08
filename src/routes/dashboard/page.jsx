import {
  Package,
  Users,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Percent,
  UserCheck,
} from "lucide-react";
import { overviewData } from "@/constants";
import StatCard from "./components/StatCard";
import OverviewChart from "./components/OverviewChart";
import OverviewofSellers from "./components/OverviewofSellers";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Datos de ejemplo para el gráfico de rendimiento financiero
const performanceData = [
  { month: "Jan", revenue: 12000, profit: 8000 },
  { month: "Feb", revenue: 15000, profit: 9000 },
  { month: "Mar", revenue: 18000, profit: 10000 },
  { month: "Apr", revenue: 20000, profit: 13000 },
  { month: "May", revenue: 25000, profit: 16000 },
];

const DashboardPage = () => {
  const stats = [
    {
      id: 1,
      title: "Total Products",
      icon: <Package size={20} />,
      value: "1,250",
      growth: "+12%",
    },
    {
      id: 2,
      title: "Total Users",
      icon: <Users size={20} />,
      value: "8,430",
      growth: "+5%",
    },
    {
      id: 3,
      title: "Sales Growth",
      icon: <TrendingUp size={20} />,
      value: "$32,500",
      growth: "+18%",
    },
    {
      id: 4,
      title: "Active Customers",
      icon: <UserCheck size={20} />,
      value: "2,940",
      growth: "+7%",
    },
    {
      id: 5,
      title: "New Orders",
      icon: <ShoppingCart size={20} />,
      value: "1,120",
      growth: "+9%",
    },
    {
      id: 6,
      title: "Revenue",
      icon: <DollarSign size={20} />,
      value: "$52,430",
      growth: "+14%",
    },
    {
      id: 7,
      title: "Profit Margin",
      icon: <Percent size={20} />,
      value: "24%",
      growth: "+3%",
    },
    {
      id: 8,
      title: "Customer Retention",
      icon: <BarChart3 size={20} />,
      value: "89%",
      growth: "+2%",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      {/* === Título principal === */}
      <h1
        className="text-3xl font-semibold"
        style={{ color: "var(--color-text)" }}
      >
        Dashboard
      </h1>

      {/* === Tarjetas de estadísticas === */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            value={item.value}
            growth={item.growth}
          />
        ))}
      </div>

      {/* === Sección de gráficos === */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 auto-rows-fr">
        {/* --- Overview Chart --- */}
        <div
          className="rounded-lg border col-span-1 md:col-span-2 lg:col-span-4 flex flex-col h-[420px]"
          style={{
            backgroundColor: "var(--color-card-bg)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-2 p-4">
            <p className="font-medium" style={{ color: "var(--color-text)" }}>
              Overview
            </p>
          </div>
          <div className="flex-1 p-4">
            <OverviewChart data={overviewData} />
          </div>
        </div>

        {/* --- Financial Performance Chart --- */}
        <div
          className="rounded-lg border col-span-1 md:col-span-2 lg:col-span-3 flex flex-col h-[420px]"
          style={{
            backgroundColor: "var(--color-card-bg)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-2 p-4">
            <p className="font-medium" style={{ color: "var(--color-text)" }}>
              Financial Performance
            </p>
          </div>
          <div className="flex-1 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* === Overview of Sellers === */}
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
};

export default DashboardPage;
