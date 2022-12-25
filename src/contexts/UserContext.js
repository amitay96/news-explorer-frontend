// import React, { useState, createContext, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/MainApi";

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const history = useNavigate();
//   const [currentUser, setCurrentUser] = useState({ username: "" });
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("jwt"));

//   useEffect(() => {
//     if (token) {
//       setIsLoading(true);
//       api
//         .checkToken(token)
//         .then((res) => {
//           if (res._id) {
//             setLoggedIn(true);
//             setCurrentUser({ username: res.name });
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           history("/");
//         })
//         .finally(() => setIsLoading(false));
//     }
//   }, [loggedIn]);

//   const handleLogin = (data) => {
//     setIsLoading(true);
//     api
//       .login(data)
//       .then((res) => {
//         if (res) {
//           localStorage.setItem("jwt", res.token);
//           setCurrentUser({ username: res.user.name });
//           setLoggedIn(true);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const handleRegister = (data) => {
//     setIsLoading(true);
//     api
//       .register(data)
//       .then((res) => {
//         if (res) {
//           console.log(res);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("jwt");
//     setCurrentUser({ username: "" });
//     setLoggedIn(false);
//     history("/");
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         currentUser,
//         setCurrentUser,
//         loggedIn,
//         handleRegister,
//         handleLogin,
//         handleLogout,
//         isLoading,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;

// export const useUser = () => {
//   const context = useContext(UserContext);
//   return context;
// };
