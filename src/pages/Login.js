import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Send a request to the login endpoint
      const response = await axios.post("https://crime-report-app-production.up.railway.app/api/v1/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("authenticated", "true");

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed: ", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">CrimeWatch Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
