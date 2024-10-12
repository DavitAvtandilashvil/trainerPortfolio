import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AdminSignIn({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ userName: "", passWord: "" });

  const adminCredentials = {
    userName: "admin",
    passWord: "admin",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      login.userName === adminCredentials.userName &&
      login.passWord === adminCredentials.passWord
    ) {
      setIsAuthenticated(true);
      navigate("/admin/dashBoard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="userName"
        onChange={handleInputChange}
        value={login.userName}
        type="text"
        placeholder="Username"
      />
      <input
        name="passWord"
        onChange={handleInputChange}
        value={login.passWord}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}
