import { Box } from '@chakra-ui/react';

import './App.css';
import Home from './components/Home/Home';
import Notice from './components/common/Notice';
import useUIStateContext from './hooks/useUiStateContext';
import { Views } from './utils/constants';
import Show from './components/Show/Show';

function App() {
  const { view } = useUIStateContext();
  return (
    <Box h="full" w="full" display="flex">
      {view === Views.home ? <Home /> : <Show />}
      <Notice />
    </Box>
  );
}

export default App;
