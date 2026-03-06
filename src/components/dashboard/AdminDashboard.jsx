import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { users as usersData, rendezvous as rdvData } from "../../data/mockData";

const AdminDashboard = () => {

  const [users, setUsers] = useState(usersData);
  const [rdv, setRdv] = useState(rdvData);
  const [search, setSearch] = useState("");

  // 🔍 Recherche utilisateurs
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // ❌ Supprimer utilisateur
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // ✏️ Modifier utilisateur
  const editUser = (id) => {
    const newName = prompt("Modifier le nom :");
    if (!newName) return;

    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, name: newName } : u
      )
    );
  };

  // ❌ Supprimer rendez-vous
  const deleteRdv = (id) => {
    setRdv(rdv.filter((r) => r.id !== id));
  };

  return (
    <Container fluid>

      <Row>

        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white min-vh-100 p-3">

          <h4 className="mb-4">Admin Panel</h4>

          <ul className="list-unstyled">
            <li className="mb-3">📊 Dashboard</li>
            <li className="mb-3">👥 Utilisateurs</li>
            <li className="mb-3">🛡 Agents</li>
            <li className="mb-3">📅 Rendez-vous</li>
            <li className="mb-3">⚙ Paramètres</li>
          </ul>

        </Col>

        {/* Contenu */}
        <Col md={10} className="p-4">

          <h2 className="mb-4">Dashboard Administrateur</h2>

          {/* Cartes statistiques */}

          <Row className="mb-4">

            <Col md={3}>
              <Card className="text-center p-3 bg-primary text-white">
                <h3>{users.length}</h3>
                <p>Utilisateurs</p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center p-3 bg-success text-white">
                <h3>{rdv.length}</h3>
                <p>Rendez-vous</p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center p-3 bg-warning text-white">
                <h3>12</h3>
                <p>Agents</p>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center p-3 bg-danger text-white">
                <h3>24/7</h3>
                <p>Support</p>
              </Card>
            </Col>

          </Row>

          {/* Gestion utilisateurs */}

          <Card className="mb-4">

            <Card.Body>

              <Card.Title>Gestion des utilisateurs</Card.Title>

              <Form.Control
                type="text"
                placeholder="Rechercher utilisateur..."
                className="mb-3"
                onChange={(e) => setSearch(e.target.value)}
              />

              <Table striped bordered hover responsive>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Rôle</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>

                      <td>

                        <Button
                          size="sm"
                          variant="warning"
                          onClick={() => editUser(user.id)}
                        >
                          Modifier
                        </Button>{" "}

                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Supprimer
                        </Button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </Table>

            </Card.Body>

          </Card>

          {/* Gestion rendez-vous */}

          <Card>

            <Card.Body>

              <Card.Title>Gestion des rendez-vous</Card.Title>

              <Table striped bordered hover responsive>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {rdv.map((r) => (

                    <tr key={r.id}>

                      <td>{r.id}</td>
                      <td>{r.client}</td>
                      <td>{r.date}</td>
                      <td>{r.service}</td>

                      <td>

                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => deleteRdv(r.id)}
                        >
                          Supprimer
                        </Button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </Table>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  );
};

export default AdminDashboard;