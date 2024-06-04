import { useContext } from 'react';
import { SettingsContext } from 'src/providers/SettingsProvider';

export default function useSettingsContext() {
  return useContext(SettingsContext);
}
