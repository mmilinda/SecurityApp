import DashboardLayout from "../layouts/DashboardLayout";

export default function Client() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Client</h1>
      <div className="bg-white p-6 rounded shadow">
        Commandes du client ici...
      </div>
    </DashboardLayout>
  );
}