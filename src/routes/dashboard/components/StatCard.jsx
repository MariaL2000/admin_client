import { TrendingUp } from "lucide-react";

const StatCard = ({ title, icon, value, growth }) => {
  return (
    <div
      className="card rounded-lg border p-4 transition-colors"
      style={{
        backgroundColor: "var(--color-card-bg)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <div className="card-header flex items-center gap-3">
        <div
          className="rounded-lg p-2 transition-colors"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-card-bg)",
          }}
        >
          {icon}
        </div>
        <p className="card-title font-medium">{title}</p>
      </div>

      <div className="card-body mt-4">
        <p className="text-3xl font-bold">{value}</p>
        <span
          className="flex w-fit items-center gap-x-2 rounded-full border px-2 py-1 font-medium"
          style={{
            borderColor: "var(--color-accent)",
            color: "var(--color-accent)",
          }}
        >
          <TrendingUp size={18} />
          {growth}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
