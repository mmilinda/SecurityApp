// Navbar avec deux boutons
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const { user, login, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (role) => {
//     login(role);
//     navigate(`/${role}`);
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between">
//       <div className="text-2xl font-bold text-blue-600">
//         SecurityApp
//       </div>

//       <div className="flex gap-4">
//         {user ? (
//           <>
//           {/* {user && user.role.toUpperCase()} peremt de vérifier si l'utilisateur existe */}
//             <span className="font-semibold">{user && user.role.toUpperCase()}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 text-white px-4 py-2 rounded"
//             >
//               Déconnexion
//             </button>
//           </>
//         ) : (
//           <>
//             <button
//               onClick={() => handleLogin("client")}
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Connexion Client
//             </button>
//             <button
//               onClick={() => handleLogin("admin")}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Connexion Admin
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// Navbar avec un seul bouton
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        SecurityApp
      </div>

      <div>
        {user ? (
          <div className="flex gap-4 items-center">
            <span className="font-semibold">
              {user.role.toUpperCase()}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Connexion
          </button>
        )}
      </div>
    </nav>
  );
}