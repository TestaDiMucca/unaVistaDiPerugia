import React, { createContext, useCallback, useEffect, useState } from 'react';
import SettingsModal from 'src/components/Settings/SettingsModal';
import Driver from 'src/utils/Driver';
import {
  DEFAULT_INFO_POS,
  DEFAULT_SLIDE_ADVANCE_TIME,
} from 'src/utils/constants';
import generalEventBus, {
  TauriLinkEventMessage,
} from 'src/utils/events/general';

export type OverlaySettings = {
  enabled?: boolean;
  showFilename?: boolean;
  showIndex?: boolean;
  position?: Position;
};

/** If all these are disabled, turn overlay off */
const OVERLAY_REQUIRED_SETTINGS: Array<keyof OverlaySettings> = [
  'showFilename',
  'showIndex',
];

interface SettingsContextValues {
  advanceTime: number;
  setAdvanceTime: (state: number) => void;
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (isOpen: boolean) => void;
  overlaySettings: OverlaySettings;
  setOverlaySettings: (settings: Partial<OverlaySettings>) => void;
}

export const SettingsContext = createContext<SettingsContextValues>({
  advanceTime: DEFAULT_SLIDE_ADVANCE_TIME,
  setAdvanceTime: (_) => {},
  isSettingsModalOpen: false,
  setIsSettingsModalOpen: (_) => {},
  overlaySettings: {
    position: DEFAULT_INFO_POS,
    showFilename: true,
  },
  setOverlaySettings: (_) => {},
});

interface ProviderProps {}

const SettingsProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [advanceTime, setAdvanceTime] = useState(DEFAULT_SLIDE_ADVANCE_TIME);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [overlaySettings, setOverlaySettingsRaw] = useState<OverlaySettings>(
    {}
  );

  const handleOpenCloseSettingsModal = useCallback(
    (newState: boolean) => () => {
      setIsSettingsModalOpen(newState);
    },
    []
  );

  const setOverlaySettings = useCallback(
    (newSettings: Partial<OverlaySettings>) => {
      const settings = {
        ...overlaySettings,
        ...newSettings,
      };

      /** Turn off if we disabled the last of the required settings */
      if (
        overlaySettings.enabled &&
        newSettings.enabled &&
        OVERLAY_REQUIRED_SETTINGS.every((setting) => !settings[setting])
      )
        settings.enabled = false;

      /** Turn something on if needed */
      if (
        !overlaySettings.enabled &&
        newSettings.enabled &&
        OVERLAY_REQUIRED_SETTINGS.every((setting) => !settings[setting])
      )
        settings.showFilename = false;

      setOverlaySettingsRaw(settings);
    },
    [overlaySettings]
  );

  useEffect(() => {
    const sub = generalEventBus.subscribe((e) => {
      switch (e.message) {
        case TauriLinkEventMessage.settings:
          setIsSettingsModalOpen(true);
          console.log('Openo');
          break;
        default:
      }
    });

    return () => sub.unsubscribe();
  }, []);

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
        overlaySettings,
        setOverlaySettings,
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
