// import { useAuth } from "../../context/AuthContext";
// import { useState, useEffect } from "react";

// export default function ClientDashboard() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState(() => {
//     return JSON.parse(localStorage.getItem("orders")) || [
//       { id: "001", service: "Surveillance", status: "En cours" },
//       { id: "002", service: "Patrouille", status: "Terminée" },
//     ];
//   });

//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders));
//   }, [orders]);

//   if (user !== "client") return null;

//   const updateStatus = (index, newStatus) => {
//     const updated = [...orders];
//     updated[index].status = newStatus;
//     setOrders(updated);
//   };

//   return (
//     <section className="p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Dashboard Client</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded">
//           <thead className="bg-green-600 text-white">
//             <tr>
//               <th className="px-4 py-2 text-left">ID Commande</th>
//               <th className="px-4 py-2 text-left">Service</th>
//               <th className="px-4 py-2 text-left">Statut</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, idx) => (
//               <tr key={idx} className="border-b hover:bg-gray-100">
//                 <td className="px-4 py-2">{order.id}</td>
//                 <td className="px-4 py-2">{order.service}</td>
//                 <td className="px-4 py-2">{order.status}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <button
//                     onClick={() => updateStatus(idx, "En cours")}
//                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//                   >
//                     En cours
//                   </button>
//                   <button
//                     onClick={() => updateStatus(idx, "Terminée")}
//                     className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
//                   >
//                     Terminée
//                   </button>
//                   <button
//                     onClick={() => updateStatus(idx, "Annulée")}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   >
//                     Annulée
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Table, Button, Modal, Form } from "react-bootstrap";

const ClientDashboard = () => {
  // Mock data rendez-vous
  const [appointments, setAppointments] = useState([
    { id: 1, service: "Surveillance", date: "2026-02-28", time: "10:00", status: "Confirmé" },
    { id: 2, service: "Patrouille", date: "2026-03-02", time: "14:00", status: "En attente" },
    { id: 3, service: "Gardiennage à domicile", date: "2026-03-05", time: "09:00", status: "Confirmé" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);

  // CRUD limité
  const handleEditAppt = (appt) => {
    setSelectedAppt(appt);
    setShowModal(true);
  };

  const handleDeleteAppt = (id) => {
    if (window.confirm("Supprimer ce rendez-vous ?")) {
      setAppointments(appointments.filter(a => a.id !== id));
    }
  };

  const handleSaveAppt = () => {
    setAppointments(appointments.map(a => a.id === selectedAppt.id ? selectedAppt : a));
    setShowModal(false);
  };

  // Mock services
  const services = [
    "Surveillance événementielle",
    "Gardiennage à domicile",
    "Patrouille mobile"
  ];

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="bg-dark text-white min-vh-100 p-3">
          <h4 className="mb-4">Client Panel</h4>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Tableau de bord</Nav.Link>
            <Nav.Link href="#" className="text-white">Mes rendez-vous</Nav.Link>
            <Nav.Link href="#" className="text-white">Mes services</Nav.Link>
            <Nav.Link href="#" className="text-white">Profil</Nav.Link>
          </Nav>
        </Col>

        {/* Contenu principal */}
        <Col xs={12} md={9} lg={10} className="p-4">
          <h2 className="mb-4">Bienvenue, Client !</h2>

          {/* Cartes statistiques */}
          <Row className="mb-4">
            <Col md={4} sm={6} className="mb-3">
              <Card bg="primary" text="white" className="text-center p-3">
                <Card.Body>
                  <h3>{appointments.length}</h3>
                  <p>Rendez-vous</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-3">
              <Card bg="success" text="white" className="text-center p-3">
                <Card.Body>
                  <h3>{services.length}</h3>
                  <p>Services actifs</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-3">
              <Card bg="warning" text="white" className="text-center p-3">
                <Card.Body>
                  <h3>5</h3>
                  <p>Notifications</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Prochains rendez-vous */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Mes prochains rendez-vous</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Service</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr key={appt.id}>
                      <td>{appt.date}</td>
                      <td>{appt.time}</td>
                      <td>{appt.service}</td>
                      <td>{appt.status}</td>
                      <td>
                        <Button size="sm" variant="warning" className="me-2" onClick={() => handleEditAppt(appt)}>Modifier</Button>
                        <Button size="sm" variant="danger" onClick={() => handleDeleteAppt(appt.id)}>Supprimer</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Services réservés */}
          <Card>
            <Card.Body>
              <Card.Title>Mes services réservés</Card.Title>
              <ul>
                {services.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </Card.Body>
          </Card>

          {/* Modal édition rendez-vous */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton><Modal.Title>Modifier rendez-vous</Modal.Title></Modal.Header>
            <Modal.Body>
              {selectedAppt && (
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={selectedAppt.date} onChange={(e) => setSelectedAppt({ ...selectedAppt, date: e.target.value })}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Heure</Form.Label>
                    <Form.Control type="time" value={selectedAppt.time} onChange={(e) => setSelectedAppt({ ...selectedAppt, time: e.target.value })}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Service</Form.Label>
                    <Form.Control type="text" value={selectedAppt.service} onChange={(e) => setSelectedAppt({ ...selectedAppt, service: e.target.value })}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Statut</Form.Label>
                    <Form.Select value={selectedAppt.status} onChange={(e) => setSelectedAppt({ ...selectedAppt, status: e.target.value })}>
                      <option>En attente</option>
                      <option>Confirmé</option>
                      <option>Annulé</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" className="w-100" onClick={handleSaveAppt}>Enregistrer</Button>
                </Form>
              )}
            </Modal.Body>
          </Modal>

        </Col>
      </Row>
    </Container>
  );
};

export default ClientDashboard;