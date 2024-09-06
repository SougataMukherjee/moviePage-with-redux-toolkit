import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav>
      <ul className={styles.navWrapper}>
        <li>{user?.name && <li>welcome {user.name}</li>}</li>
        <li>
          <NavLink to={"/"}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
