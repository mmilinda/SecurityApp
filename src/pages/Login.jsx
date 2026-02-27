// ****************Version modal
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginForm({ closeForm }) {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password, role);

    if (!success) {
      setError("Email ou mot de passe incorrect");
    }
  };

  // 🔥 Dès que user est défini → fermer modal + redirection
  useEffect(() => {
    if (user) {
      if (closeForm) closeForm(); //sécurité
      navigate(`/${user.role}`);
    }
  }, [user, navigate, closeForm]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Se connecter</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Se connecter</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}


// Deuxième version sans modal
// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const { user, login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("client");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = login(email, password, role);

//     if (!success) {
//       setError("Email ou mot de passe incorrect");
//     }
//   };

//   // 🔥 Dès que user est connecté → redirection automatique
//   useEffect(() => {
//     if (user) {
//       navigate(`/${user.role}`);
//     }
//   }, [user]);

//   return (
//     <div className="login-page">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Se connecter</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="client">Client</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit">Se connecter</button>

//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// }