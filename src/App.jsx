import React from "react";
import "./App.css";
// import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";

import AdminDashboard from "./components/dashboard/AdminDashboard";
import ClientDashboard from "./components/dashboard/ClientDashboard";
import Login from "./pages/Login";

import Testimonials from "./components/Testimonials"; // adapte le chemin
import About from "./components/About";
// Certification
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Certifications from "./pages/Certifications";





// ✅ Landing regroupé ici
function Landing() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      {/* <Certifications /> */}
      <Services />
      <Team />
      <Testimonials />
    </>
  );
}

// 🔐 Route protégée améliorée
function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // Pas connecté (/login)
  if (!user) return <Navigate to="/" replace />;

  // Mauvais rôle
  if (user.role !== role) return <Navigate to="/" replace />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/certifications" element={<Certifications />} />


        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client"
          element={
            <ProtectedRoute role="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/* Route inconnue */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}