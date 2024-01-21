import { useContext } from 'react';
import { UIStateContext } from 'src/providers/UIStateProvider';

export default function useUIStateContext() {
  return useContext(UIStateContext);
}
