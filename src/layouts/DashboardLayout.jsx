import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-400">{user.toUpperCase()}</p>

        <button
          onClick={handleLogout}
          className="bg-red-600 w-full py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}