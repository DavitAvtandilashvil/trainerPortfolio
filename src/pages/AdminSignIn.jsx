import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSignIn() {
  const [login, setLogin] = useState({
    userName: "",
    passWord: "",
  });

  const admin = {
    userName: "admin",
    passWord: "admin",
  };
  const navigate = useNavigate();
  const handleUserNameInput = (input) => {
    setLogin((prev) => ({ ...prev, userName: input }));
  };

  const handlePasswordInput = (input) => {
    setLogin((prev) => ({ ...prev, passWord: input }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      login.userName === admin.userName &&
      login.passWord === admin.passWord
    ) {
      navigate("/admin/dashBoard");
    } else {
      alert("Incorrect username or password!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleUserNameInput(e.target.value)}
          value={login.userName}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => handlePasswordInput(e.target.value)}
          value={login.passWord}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
