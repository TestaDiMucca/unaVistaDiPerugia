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

export type GeneralSettings = {
  advanceTime: number;
  libraryCaching?: boolean;
};

/** If all these are disabled, turn overlay off */
const OVERLAY_REQUIRED_SETTINGS: Array<keyof OverlaySettings> = [
  'showFilename',
  'showIndex',
];

interface SettingsContextValues {
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (isOpen: boolean) => void;
  overlaySettings: OverlaySettings;
  setOverlaySettings: (settings: Partial<OverlaySettings>) => void;
  generalSettings: GeneralSettings;
  setGeneralSettings: (settings: Partial<GeneralSettings>) => void;
}

export const SettingsContext = createContext<SettingsContextValues>({
  isSettingsModalOpen: false,
  setIsSettingsModalOpen: (_) => {},
  overlaySettings: {
    position: DEFAULT_INFO_POS,
    showFilename: true,
  },
  setOverlaySettings: (_) => {},
  generalSettings: {
    advanceTime: DEFAULT_SLIDE_ADVANCE_TIME,
  },
  setGeneralSettings: (_) => {},
});

interface ProviderProps {}

const SettingsProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [overlaySettings, setOverlaySettingsRaw] = useState<OverlaySettings>(
    {}
  );

  const [generalSettings, setGeneralSettingsRaw] = useState<GeneralSettings>({
    advanceTime: DEFAULT_SLIDE_ADVANCE_TIME,
  });

  const handleOpenCloseSettingsModal = useCallback(
    (newState: boolean) => () => {
      setIsSettingsModalOpen(newState);
    },
    []
  );

  const setGeneralSettings = useCallback(
    (newSettings: Partial<GeneralSettings>) => {
      const settings = {
        ...generalSettings,
        ...newSettings,
      };

      setGeneralSettingsRaw(settings);
    },
    [generalSettings]
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
          break;
        default:
      }
    });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    Driver.setAdvanceInterval(generalSettings.advanceTime);
  }, [generalSettings.advanceTime]);

  return (
    <SettingsContext.Provider
      value={{
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        overlaySettings,
        setOverlaySettings,
        generalSettings,
        setGeneralSettings,
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
