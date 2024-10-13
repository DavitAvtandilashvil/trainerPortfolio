import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AdminSignIn({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ userName: "", passWord: "" });
  const [error, setError] = useState("");
  const adminCredentials = {
    userName: "admin",
    passWord: "admin",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    setError("");
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
      setError("Invalid credentials");
    }
  };

  return (
    <form
      className="flex flex-col  gap-[20px] justify-center items-center h-[100vh]"
      onSubmit={handleSubmit}
    >
      <input
        name="userName"
        onChange={handleInputChange}
        value={login.userName}
        type="text"
        placeholder="Username"
        className="w-[300px]  h-[30px]"
      />
      <input
        className="w-[300px] h-[30px]"
        name="passWord"
        onChange={handleInputChange}
        value={login.passWord}
        type="password"
        placeholder="Password"
      />
      {error && <p className="text-[red]">{error}</p>}
      <button className="text-[16px] text-[white]" type="submit">
        submit
      </button>
    </form>
  );
}
