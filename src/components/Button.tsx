import React from 'react';
import styles from '../styles/components/Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {loading ? <p className="loading"></p> : children}
    </button>
  );
};

export default Button;
