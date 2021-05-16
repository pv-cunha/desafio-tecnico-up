import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <h1>
        <i className="fas fa-book"></i>
        Library
      </h1>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/" end activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
