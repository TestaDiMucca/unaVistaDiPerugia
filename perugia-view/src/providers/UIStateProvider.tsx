import React, { createContext, useState } from 'react';
import { AlertProps } from '@chakra-ui/react';

type AlertMessage = {
  message: string;
  status: AlertProps['status'];
};

type AlertState = AlertMessage | null;

interface UIStateContextValues {
  loading: boolean;
  setLoading: (state: boolean) => void;
  alert: AlertState;
  setAlert: (alert: AlertState) => void;
}

export const UIStateContext = createContext<UIStateContextValues>({
  loading: false,
  setLoading: (_) => {},
  alert: null,
  setAlert: (_) => {},
});

interface ProviderProps {}

const UIStateProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>(null);

  return (
    <UIStateContext.Provider value={{ loading, setLoading, alert, setAlert }}>
      {children}
    </UIStateContext.Provider>
  );
};

export default UIStateProvider;
