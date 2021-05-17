import React from 'react';

import styles from '../../styles/components/layout/Alert.module.css';

interface ToastContainerProps {
  alerts: ToastProps[];
}

interface ToastProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  description?: string;
}

const Alert: React.FC<ToastContainerProps> = ({ alerts }) => {
  return (
    <>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`${styles.alert} ${alert.type}`}>
            <i className="fas fa-info-circle"></i> {alert.description}
          </div>
        ))}
    </>
  );
};

export default Alert;
