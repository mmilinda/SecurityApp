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

import Testimonials from "./components/Testimonials";
import About from "./components/About";
// Certification
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Certifications from "./pages/Certifications";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Partenaires from "./components/Partenaires";
import ProtectedRoute from "./components/ProtectedRoute";
import NavbarDashboard from "./components/NavbarDashboard";
import AgentDashboard from "./components/dashboard/AgentDashboard";
import References from "./pages/References";
// Carousel Ref
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";








// ✅ Landing regroupé ici
function Landing() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <div style={{marginTop: "80px"}}>
        <section id="home">
            <Hero />
        </section>
        <section id="about">
            <About />
        </section>
            <Stats />
      {/* <Certifications /> */}
          <Services />
          <Team />
          <Testimonials />
          <Partenaires />
        <section id="contact">
            <Contact />
        </section>
      </div>
    </>
  );
}

// 🔐 Route protégée améliorée
// function ProtectedRoute({ children, role }) {
//   const { user } = useAuth();

  // Pas connecté (/login)
  // if (!user) return <Navigate to="/" replace />;

  // Mauvais rôle
//   if (user.role !== role) return <Navigate to="/" replace />;

//   return children;
// }

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/references" element={<References />} />
  
        {/* Dashboards */}

        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute role="admin">
              <NavbarDashboard />
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> 

        <Route
          path="/dashboard/client"
          element={
            <ProtectedRoute role="client">
              <NavbarDashboard />
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/agent"
          element={
            <ProtectedRoute role="agent">
              <NavbarDashboard />
              <AgentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Route inconnue */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}