import {
  ChartColumn,
  Home,
  NotepadText,
  Package,
  PackagePlus,
  Users,
} from "lucide-react";

export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
      {
        label: "Reports",
        icon: NotepadText,
        path: "/reports",
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        label: "Analytics",
        icon: ChartColumn,
        path: "/analytics",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "All Products",
        icon: Package,
        path: "/products",
      },
      {
        label: "Add Product",
        icon: PackagePlus,
        path: "/products/new",
      },
    ],
  },
];

export const overviewData = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2000 },
  { name: "Mar", total: 3000 },
  { name: "Apr", total: 2500 },
  { name: "May", total: 3200 },
  { name: "Jun", total: 4100 },
  { name: "Jul", total: 3800 },
  { name: "Aug", total: 3600 },
  { name: "Sep", total: 4200 },
  { name: "Oct", total: 3900 },
  { name: "Nov", total: 4500 },
  { name: "Dec", total: 4700 },
];

export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
