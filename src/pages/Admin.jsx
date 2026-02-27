// import DashboardLayout from "../layouts/DashboardLayout";
import AdminDashboard from "./components/dashboard/AdminDashboard";

export default function Admin() {
  return (
    <AdminDashboard>
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="bg-white p-6 rounded shadow">
        Gestion des agents ici...
      </div>
    </AdminDashboard>
  );
}