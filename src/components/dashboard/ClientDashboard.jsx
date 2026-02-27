import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

export default function ClientDashboard() {
  const { user } = useAuth();
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [
      { id: "001", service: "Surveillance", status: "En cours" },
      { id: "002", service: "Patrouille", status: "Terminée" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  if (user !== "client") return null;

  const updateStatus = (index, newStatus) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);
  };

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Dashboard Client</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID Commande</th>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Statut</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.service}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => updateStatus(idx, "En cours")}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    En cours
                  </button>
                  <button
                    onClick={() => updateStatus(idx, "Terminée")}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Terminée
                  </button>
                  <button
                    onClick={() => updateStatus(idx, "Annulée")}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Annulée
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