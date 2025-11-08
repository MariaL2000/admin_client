import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme } from "@/hooks/useTheme";

const taskData = [
  { name: "Completed Tasks", value: 70 },
  { name: "Pending Tasks", value: 30 },
];
const COLORS = ["#82ca9d", "#8884d8"];

export default function ProfilePage() {
  const { theme } = useTheme();

  // Estado provisional del admin
  const [profile, setProfile] = useState({
    username: "admin",
    email: "admin@example.com",
    photo: "",
  });
  const [password, setPassword] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Cambios guardados (provisional)");
    // Aquí iría el fetch al backend para guardar cambios
  };

  return (
    <div className="p-6 space-y-6">
      <h1
        className="text-3xl font-semibold"
        style={{ color: theme === "dark" ? "#f3f4f6" : "#111827" }}
      >
        Admin Profile
      </h1>

      {/* === Datos del perfil === */}
      <div
        className={`rounded-lg p-6 shadow flex flex-col md:flex-row gap-6`}
        style={{
          backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
        }}
      >
        {/* Foto de perfil */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
              >
                <span className="text-gray-500">No Photo</span>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="text-sm text-gray-500 dark:text-gray-300"
          />
        </div>

        {/* Formulario de datos */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              className={`p-2 rounded border focus:outline-none ${theme === "dark" ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-gray-100 text-gray-900 border-gray-300"}`}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className={`p-2 rounded border focus:outline-none ${theme === "dark" ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-gray-100 text-gray-900 border-gray-300"}`}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className={`p-2 rounded border focus:outline-none ${theme === "dark" ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-gray-100 text-gray-900 border-gray-300"}`}
            />
          </div>

          <button
            onClick={handleSave}
            className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* === Gráfico de tareas === */}
      <div
        className={`rounded-lg p-4 shadow`}
        style={{
          backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
        }}
      >
        <h2
          className="text-lg font-semibold mb-2"
          style={{ color: theme === "dark" ? "#f3f4f6" : "#111827" }}
        >
          Task Completion
        </h2>
        <div className="h-[300px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={taskData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {taskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
