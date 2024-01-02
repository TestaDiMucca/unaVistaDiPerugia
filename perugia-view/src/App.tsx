import { Box } from '@chakra-ui/react';

import './App.css';
import Home from './components/Home';
import Notice from './components/common/Notice';

function App() {
  return (
    <Box>
      <Home />
      <Notice />
    </Box>
  );
}

export default App;
