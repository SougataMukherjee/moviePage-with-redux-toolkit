import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setUser({ name, password }));
    navigate("/");
    setName("");
    setPassword("");
  };
  return (
    <div className={styles.fromWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">User name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">User password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
