import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import './App.css';
import Home from './components/Home/Home';
import Notice from './components/common/Notice';
import useUIStateContext from './hooks/useUiStateContext';
import { Views } from './utils/constants';
import Show from './components/Show/Show';
import { tauriPrintDebounced } from './utils/tauriAdapter';
import { initIdb } from './utils/WebStore';
import { initTestServices } from './utils/testService';
import { readLibrary } from './utils/files.helpers';
import useLibraryContext from './hooks/useLibraryContext';
import generalEventBus, { GeneralEventMessage } from './utils/events/general';

function App() {
  const { view, setView } = useUIStateContext();
  const { setLibrary } = useLibraryContext();

  useEffect(() => {
    /** App mount preparations */
    tauriPrintDebounced('React mounted.');
    void initIdb();
    initTestServices();

    const sub = generalEventBus.subscribe((e) => {
      switch (e.message) {
        case GeneralEventMessage.idbReady:
          readLibrary().then((stored) => {
            if (stored && stored.length) {
              setLibrary(stored);
              setView(Views.show);
            }
          });
          break;
        default:
      }
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <Box h="100%" w="100%" display="flex" overflow="hidden">
      {view === Views.home ? <Home /> : <Show />}
      <Notice />
    </Box>
  );
}

export default App;
