import React from 'react';
import styles from '../../styles/components/layout/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <span className={styles.loading}></span>
    </div>
  );
};

export default Loading;
