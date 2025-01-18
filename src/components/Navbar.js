import styles from "../styles/Navbar.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoDiv}>
          <Link to="/Hostel/">Asha Homes Luxury Girls Hostel</Link>
        </div>
        <div className={styles.linksDiv}>
          <NavLink
            to="/Hostel/"
            end
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="gallery"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
