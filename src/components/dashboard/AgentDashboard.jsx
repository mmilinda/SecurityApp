// import React, { useState } from "react";
// import { Container, Row, Col, Card, Table, Button, Form, Modal, Navbar } from "react-bootstrap";

// const AgentDashboard = () => {

//   const agent = {
//     name: "Agent Diop",
//     photo: "https://randomuser.me/api/portraits/men/45.jpg"
//   };

//   const [search, setSearch] = useState("");

//   const [interventions, setInterventions] = useState([
//     {
//       id: 1,
//       client: "Entreprise DakarTech",
//       service: "Surveillance",
//       date: "2026-03-02",
//       status: "Terminée"
//     },
//     {
//       id: 2,
//       client: "Villa Ndiaye",
//       service: "Gardiennage",
//       date: "2026-03-03",
//       status: "En cours"
//     },
//     {
//       id: 3,
//       client: "Hôtel Teranga",
//       service: "Patrouille",
//       date: "2026-03-04",
//       status: "Terminée"
//     }
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedIntervention, setSelectedIntervention] = useState(null);

//   const handleEdit = (intervention) => {
//     setSelectedIntervention(intervention);
//     setShowModal(true);
//   };

//   const handleSave = () => {
//     setInterventions(
//       interventions.map((i) =>
//         i.id === selectedIntervention.id ? selectedIntervention : i
//       )
//     );
//     setShowModal(false);
//   };

//   const filteredInterventions = interventions.filter((i) =>
//     i.client.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   return (
//     <Container fluid>

//       {/* Navbar Agent */}
//       <Navbar bg="dark" variant="dark" className="px-4">
//         <Navbar.Brand>Agent Dashboard</Navbar.Brand>

//         <div className="ms-auto d-flex align-items-center gap-3">
//           <img
//             src={agent.photo}
//             alt="profil"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%"
//             }}
//           />

//           <span className="text-white">{agent.name}</span>

//           <Button variant="danger" onClick={handleLogout}>
//             Déconnexion
//           </Button>
//         </div>
//       </Navbar>

//       <Row className="p-4">

//         {/* Statistiques */}
//         <Row className="mb-4">

//           <Col md={4}>
//             <Card bg="primary" text="white" className="text-center p-3">
//               <Card.Body>
//                 <h3>12</h3>
//                 <p>Services réalisés</p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={4}>
//             <Card bg="success" text="white" className="text-center p-3">
//               <Card.Body>
//                 <h3>5</h3>
//                 <p>Rendez-vous</p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={4}>
//             <Card bg="warning" text="white" className="text-center p-3">
//               <Card.Body>
//                 <h3>{interventions.length}</h3>
//                 <p>Interventions</p>
//               </Card.Body>
//             </Card>
//           </Col>

//         </Row>

//         {/* Recherche */}
//         <Card className="mb-4">
//           <Card.Body>

//             <Card.Title>Rechercher une intervention</Card.Title>

//             <Form.Control
//               type="text"
//               placeholder="Rechercher par client..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//           </Card.Body>
//         </Card>

//         {/* Table interventions */}
//         <Card>
//           <Card.Body>

//             <Card.Title>Mes interventions</Card.Title>

//             <Table striped bordered hover responsive>

//               <thead>
//                 <tr>
//                   <th>Client</th>
//                   <th>Service</th>
//                   <th>Date</th>
//                   <th>Statut</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredInterventions.map((i) => (
//                   <tr key={i.id}>
//                     <td>{i.client}</td>
//                     <td>{i.service}</td>
//                     <td>{i.date}</td>
//                     <td>{i.status}</td>
//                     <td>

//                       <Button
//                         size="sm"
//                         variant="warning"
//                         onClick={() => handleEdit(i)}
//                       >
//                         Modifier
//                       </Button>

//                     </td>
//                   </tr>
//                 ))}
//               </tbody>

//             </Table>

//           </Card.Body>
//         </Card>

//       </Row>

//       {/* Modal modification */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>

//         <Modal.Header closeButton>
//           <Modal.Title>Modifier intervention</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>

//           {selectedIntervention && (
//             <Form>

//               <Form.Group className="mb-3">
//                 <Form.Label>Client</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={selectedIntervention.client}
//                   onChange={(e) =>
//                     setSelectedIntervention({
//                       ...selectedIntervention,
//                       client: e.target.value
//                     })
//                   }
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Service</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={selectedIntervention.service}
//                   onChange={(e) =>
//                     setSelectedIntervention({
//                       ...selectedIntervention,
//                       service: e.target.value
//                     })
//                   }
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={selectedIntervention.date}
//                   onChange={(e) =>
//                     setSelectedIntervention({
//                       ...selectedIntervention,
//                       date: e.target.value
//                     })
//                   }
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Statut</Form.Label>
//                 <Form.Select
//                   value={selectedIntervention.status}
//                   onChange={(e) =>
//                     setSelectedIntervention({
//                       ...selectedIntervention,
//                       status: e.target.value
//                     })
//                   }
//                 >
//                   <option>En cours</option>
//                   <option>Terminée</option>
//                 </Form.Select>
//               </Form.Group>

//               <Button className="w-100" onClick={handleSave}>
//                 Enregistrer
//               </Button>

//             </Form>
//           )}

//         </Modal.Body>

//       </Modal>

//     </Container>
//   );
// };

// export default AgentDashboard;
import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form, Modal, Navbar, Nav, ListGroup } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// Agent connecté
const agent = {
  name: "Agent Diop",
  photo: "https://randomuser.me/api/portraits/men/45.jpg",
};

// Mock interventions
const initialInterventions = [
  { id: 1, client: "Entreprise DakarTech", service: "Surveillance", date: "2026-03-02", status: "Terminée", location: "Dakar" },
  { id: 2, client: "Villa Ndiaye", service: "Gardiennage", date: "2026-03-03", status: "En cours", location: "Pikine" },
  { id: 3, client: "Hôtel Teranga", service: "Patrouille", date: "2026-03-04", status: "Terminée", location: "Dakar Plateau" },
];

// Mock notifications
const initialNotifications = [
  { id: 1, message: "Nouvelle intervention assignée", date: "2026-03-01" },
  { id: 2, message: "Intervention terminée par Client B", date: "2026-02-28" },
];

const AgentDashboard = () => {
  const [interventions, setInterventions] = useState(initialInterventions);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleEdit = (intervention) => {
    setSelectedIntervention(intervention);
    setShowModal(true);
  };

  const handleSave = () => {
    setInterventions(interventions.map(i => i.id === selectedIntervention.id ? selectedIntervention : i));
    setShowModal(false);
  };

  const filteredInterventions = interventions.filter(i =>
    i.client.toLowerCase().includes(search.toLowerCase())
  );

  // FullCalendar events
  const calendarEvents = interventions.map(i => ({
    id: i.id.toString(),
    title: `${i.service} - ${i.client}`,
    start: i.date,
    color: i.status === "Terminée" ? "green" : "orange"
  }));

  // Lors d'un clic sur un événement
  const handleEventClick = (info) => {
    const inter = interventions.find(i => i.id.toString() === info.event.id);
    if (inter) handleEdit(inter);
  };

  // Drag & Drop pour changer la date
  const handleEventDrop = (info) => {
    const updatedInterventions = interventions.map(i => 
      i.id.toString() === info.event.id 
        ? { ...i, date: info.event.startStr } 
        : i
    );
    setInterventions(updatedInterventions);
  };

  return (
    <Container fluid>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="px-4">
        <Navbar.Brand>Agent Dashboard</Navbar.Brand>
        <div className="ms-auto d-flex align-items-center gap-3">
          <img src={agent.photo} alt="profil" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
          <span className="text-white">{agent.name}</span>
          <Button variant="danger" onClick={handleLogout}>Déconnexion</Button>
        </div>
      </Navbar>

      <Row className="mt-4">
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="bg-dark text-white min-vh-100 p-3">
          <h5 className="mb-4">Menu</h5>
          <Nav className="flex-column">
            <Nav.Link className={`text-white ${activePage === "dashboard" ? "fw-bold" : ""}`} onClick={() => setActivePage("dashboard")}>Tableau de bord</Nav.Link>
            <Nav.Link className={`text-white ${activePage === "interventions" ? "fw-bold" : ""}`} onClick={() => setActivePage("interventions")}>Mes interventions</Nav.Link>
            <Nav.Link className={`text-white ${activePage === "planning" ? "fw-bold" : ""}`} onClick={() => setActivePage("planning")}>Planning</Nav.Link>
            <Nav.Link className={`text-white ${activePage === "localisation" ? "fw-bold" : ""}`} onClick={() => setActivePage("localisation")}>Localisation</Nav.Link>
            <Nav.Link className={`text-white ${activePage === "notifications" ? "fw-bold" : ""}`} onClick={() => setActivePage("notifications")}>Notifications</Nav.Link>
            <Nav.Link className={`text-white ${activePage === "settings" ? "fw-bold" : ""}`} onClick={() => setActivePage("settings")}>Paramètres</Nav.Link>
          </Nav>
        </Col>

        {/* Contenu principal */}
        <Col xs={12} md={9} lg={10} className="p-4">
          {activePage === "dashboard" && (
            <>
              <h2>Bienvenue, {agent.name}</h2>
              <Row className="mb-4">
                <Col md={4}>
                  <Card bg="primary" text="white" className="text-center p-3 mb-3">
                    <Card.Body>
                      <h3>{interventions.length}</h3>
                      <p>Interventions</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card bg="success" text="white" className="text-center p-3 mb-3">
                    <Card.Body>
                      <h3>5</h3>
                      <p>Rendez-vous</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card bg="warning" text="white" className="text-center p-3 mb-3">
                    <Card.Body>
                      <h3>{notifications.length}</h3>
                      <p>Notifications</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {activePage === "planning" && (
            <Card>
              <Card.Body>
                <Card.Title>Planning Agent</Card.Title>
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  events={calendarEvents}
                  eventClick={handleEventClick}
                  editable={true} // Important pour drag & drop
                  eventDrop={handleEventDrop} // Sauvegarde nouvelle date
                  height={600}
                />
              </Card.Body>
            </Card>
          )}

          {/* ... le reste reste inchangé (interventions, localisation, notifications, settings) ... */}

        </Col>
      </Row>

      {/* Modal modification intervention */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier intervention</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedIntervention && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Client</Form.Label>
                <Form.Control type="text" value={selectedIntervention.client} onChange={(e) => setSelectedIntervention({ ...selectedIntervention, client: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Service</Form.Label>
                <Form.Control type="text" value={selectedIntervention.service} onChange={(e) => setSelectedIntervention({ ...selectedIntervention, service: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={selectedIntervention.date} onChange={(e) => setSelectedIntervention({ ...selectedIntervention, date: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Statut</Form.Label>
                <Form.Select value={selectedIntervention.status} onChange={(e) => setSelectedIntervention({ ...selectedIntervention, status: e.target.value })}>
                  <option>En cours</option>
                  <option>Terminée</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Localisation</Form.Label>
                <Form.Control type="text" value={selectedIntervention.location} onChange={(e) => setSelectedIntervention({ ...selectedIntervention, location: e.target.value })} />
              </Form.Group>
              <Button className="w-100" onClick={handleSave}>Enregistrer</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AgentDashboard;