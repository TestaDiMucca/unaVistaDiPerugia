import React, { createContext, useState } from 'react';
import { AlertProps } from '@chakra-ui/react';

import { Views } from 'src/utils/constants';

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
  view: Views;
  setView: (v: Views) => void;
}

export const UIStateContext = createContext<UIStateContextValues>({
  loading: false,
  setLoading: (_) => {},
  alert: null,
  setAlert: (_) => {},
  view: Views.home,
  setView: (_) => {},
});

interface ProviderProps {}

const UIStateProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>(null);
  const [view, setView] = useState(Views.home);

  return (
    <UIStateContext.Provider
      value={{ loading, setLoading, alert, setAlert, view, setView }}
    >
      {children}
    </UIStateContext.Provider>
  );
};

export default UIStateProvider;
