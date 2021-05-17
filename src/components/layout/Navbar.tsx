import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import styles from '../../styles/components/layout/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  const mobile = useMedia('(max-width: 40rem)');

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.navbar}>
      <h1>
        <i className="fas fa-book"></i>
        Library
      </h1>
      <div className={styles.wrapper}>
        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              isMobileMenuOpen && styles.mobileButtonActive
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            isMobileMenuOpen && styles.navMobileActive
          }`}
        >
          <ul>
            <li>
              <NavLink to="/" end activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" activeClassName={styles.active}>
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
