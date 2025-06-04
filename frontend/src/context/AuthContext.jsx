import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const API_BACKEND_URL = import.meta.env.VITE_BACKEND_API_URL

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);

      axios
        .get(`${API_BACKEND_URL}/api/v1/users/verify-token`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.error("Token inválido o expirado:", err);
          logout(); // Limpia si no es válido
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BACKEND_URL}/api/v1/users/login`, {
        email,
        password,
      });

      const receivedToken = res.data.token;
      localStorage.setItem("token", receivedToken);
      setToken(receivedToken);

      
      const verifyRes = await axios.get(
        `${API_BACKEND_URL}/api/v1/users/verify-token`,
        {
          headers: { Authorization: `Bearer ${receivedToken}` },
        }
      );

      setUser(verifyRes.data.user);
      return { success: true };
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      return {
        success: false,
        message: err.response?.data?.message || "Error en el login",
      };
    }
  };

  
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
