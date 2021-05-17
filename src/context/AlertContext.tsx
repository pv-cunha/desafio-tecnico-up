import React from 'react';
import { v4 } from 'uuid';
import Alerts from '../components/layout/Alert';

interface AlertContextData {
  setAlert: (messages: Omit<AlertMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

export interface AlertMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  time?: number;
  description?: string;
}

const AlertContext = React.createContext<AlertContextData>(
  {} as AlertContextData,
);

const useAlert = () => {
  const context = React.useContext(AlertContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider !');
  }

  return context;
};

const AlertProvider: React.FC = ({ children }) => {
  const [alerts, setAlerts] = React.useState<AlertMessage[]>([]);

  const setAlert = React.useCallback(
    ({ type, description, time = 5000 }: Omit<AlertMessage, 'id'>) => {
      const id = v4();

      const alert = {
        id,
        type,
        description,
      };

      setAlerts((state) => [...state, alert]);

      setTimeout(() => removeToast(alert.id), time);
    },

    // eslint-disable-next-line
    [],
  );

  const removeToast = React.useCallback((id: string) => {
    setAlerts((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={{ setAlert, removeToast }}>
      {children}
      <Alerts alerts={alerts} />
    </AlertContext.Provider>
  );
};

export { AlertProvider, useAlert };
