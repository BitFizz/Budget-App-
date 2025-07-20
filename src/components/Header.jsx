import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); 

  const isActive = (path) => location.pathname === path;

  const styles = {
    container: {
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'left',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      margin: '1rem',
      gap: '2rem',
    },
    link: (active) => ({
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.5rem', 
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      backgroundColor: active ? '#1d1d1f' : 'transparent',
      color: active ? '#fff' : '#1d1d1f',
      transition: '0.3s',
    }),
    profileFloating: {
      position: 'fixed',
      top: '3.0rem',
      right: '2.8rem',
      zIndex: 1000,
    },
    profileImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '50%',
      display: 'block',
      boxShadow: '0 0 6px rgba(0,0,0,0.2)',
      overflow: 'hidden',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '65px',
      right: '1.0rem',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '0.5rem 0',
      width: '160px',
      zIndex: 1001,
    },

    menuItem: {
      padding: '0.75rem 1rem',
      fontSize: '0.95rem',
      color: '#333',
      cursor: 'pointer',
      transition: '0.2s',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <Link to="/" style={styles.link(isActive('/'))}>Dashboard</Link>
        <Link to="/transactions" style={styles.link(isActive('/transactions'))}>Transaction</Link>
        <Link to="/previsionnel" style={styles.link(isActive('/previsionnel'))}>Prévision</Link>
      </div>

      <div style={styles.profileFloating}>
        <img
          src = "/images/Profil.jpg"
          alt = "Profil"
          style = {styles.profileImage}
          onClick={() => setMenuOpen(!menuOpen)}
        /> 
      
      {menuOpen && (
          <div style={styles.dropdownMenu}>
            <div style={styles.menuItem}> Mon Profil</div>
            <div style={styles.menuItem}> Paramètres</div>
            <div style={styles.menuItem}> Déconnexion</div>
          </div>
      )}
      </div>
    </>
  );
}
