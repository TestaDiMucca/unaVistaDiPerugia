import {
  Alert,
  AlertDescription,
  AlertIcon,
  SlideFade,
} from '@chakra-ui/react';
import useUIStateContext from 'src/hooks/useUiStateContext';
import Dock from './Dock';

export default function Notice() {
  const { alert } = useUIStateContext();

  return (
    <Dock>
      <SlideFade in={!!alert} offsetY="20px">
        {!!alert && (
          <Alert zIndex="2" w="xl" variant="left-accent" status={alert.status}>
            <AlertIcon />
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
      </SlideFade>
    </Dock>
  );
}
