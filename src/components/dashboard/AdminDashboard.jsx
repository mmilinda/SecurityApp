import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [agents, setAgents] = useState(() => {
    return JSON.parse(localStorage.getItem("agents")) || [
      { name: "Ali", status: "Actif" },
      { name: "Fatou", status: "En mission" },
      { name: "Mamadou", status: "Disponible" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);

  if (user !== "admin") return null;

  const updateStatus = (index, newStatus) => {
    const updated = [...agents];
    updated[index].status = newStatus;
    setAgents(updated);
  };

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Dashboard Admin</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nom de l’agent</th>
              <th className="px-4 py-2 text-left">Statut</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{agent.name}</td>
                <td className="px-4 py-2">{agent.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => updateStatus(idx, "Actif")}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Actif
                  </button>
                  <button
                    onClick={() => updateStatus(idx, "En mission")}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    En mission
                  </button>
                  <button
                    onClick={() => updateStatus(idx, "Disponible")}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Disponible
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}