// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const login = (email, password, role) => {
//     const fakeUsers = [
//       { email: "admin@gmail.com", password: "1234", role: "admin" },
//       { email: "client@gmail.com", password: "1234", role: "client" },
//     ];

//     const foundUser = fakeUsers.find(
//       (u) => u.email === email && u.password === password && u.role === role
//     );

//     if (foundUser) {
//       setUser(foundUser);
//       localStorage.setItem("user", JSON.stringify(foundUser));
//       return true;
//     }

//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // 🔥 CECI EST ESSENTIEL
// export function useAuth() {
//   return useContext(AuthContext);
// }

// Deuxième form d'authentification
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password, role) => {
    // ⚡ Comptes simulés
    const fakeUsers = [
      { email: "admin@gmail.com", password: "1234", role: "admin" },
      { email: "client@gmail.com", password: "1234", role: "client" },
    ];

    const foundUser = fakeUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}