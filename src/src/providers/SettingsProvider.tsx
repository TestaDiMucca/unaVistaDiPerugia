import React, { createContext, useCallback, useEffect, useState } from 'react';
import SettingsModal from 'src/components/Settings/SettingsModal';
import Driver from 'src/utils/Driver';
import { DEFAULT_SLIDE_ADVANCE_TIME } from 'src/utils/constants';

interface SettingsContextValues {
  advanceTime: number;
  setAdvanceTime: (state: number) => void;
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (isOpen: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextValues>({
  advanceTime: DEFAULT_SLIDE_ADVANCE_TIME,
  setAdvanceTime: (_) => {},
  isSettingsModalOpen: false,
  setIsSettingsModalOpen: (_) => {},
});

interface ProviderProps {}

const SettingsProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [advanceTime, setAdvanceTime] = useState(DEFAULT_SLIDE_ADVANCE_TIME);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleOpenCloseSettingsModal = useCallback(
    (newState: boolean) => () => {
      setIsSettingsModalOpen(newState);
    },
    []
  );

  useEffect(() => {
    Driver.setAdvanceInterval(advanceTime);
  }, [advanceTime]);

  return (
    <SettingsContext.Provider
      value={{
        advanceTime,
        setAdvanceTime,
        isSettingsModalOpen,
        setIsSettingsModalOpen,
      }}
    >
      {children}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={handleOpenCloseSettingsModal(false)}
        onConfirm={handleOpenCloseSettingsModal(false)}
      />
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
