import DefaultDropzone from 'react-dropzone';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';
import useUIStateContext from 'src/hooks/useUiStateContext';
import { ACCEPTED_TYPES } from 'src/utils/files.helpers';

type Props = Omit<BoxProps, 'onDrop'> & {
  onDrop: (acceptedFiles: File[]) => void;
  children?: React.ReactNode;
};

export default function Dropzone({ onDrop, children, ...boxProps }: Props) {
  const { setAlert } = useUIStateContext();

  const showInstructions = useCallback(
    () =>
      setAlert({
        status: 'info',
        message: 'Drop files here to load them',
      }),
    [setAlert]
  );

  const hideInstruction = useCallback(() => setAlert(null), [setAlert]);

  const handleDrop = useCallback(
    (files: File[]) => {
      onDrop(files);
      hideInstruction();
    },
    [onDrop]
  );

  const acceptedFormats = useMemo(() => {
    const res: Record<string, string[]> = {};

    ACCEPTED_TYPES.forEach((type) => {
      res[type] = [];
    });

    return res;
  }, []);

  return (
    <DefaultDropzone
      onDrop={handleDrop}
      onDragEnter={showInstructions}
      onDragLeave={hideInstruction}
      accept={acceptedFormats}
    >
      {({ getRootProps, getInputProps }) => (
        <Box
          position="absolute"
          zIndex={1}
          top="0"
          bottom="0"
          right="0"
          left="0"
          w="full"
          cursor="pointer"
          {...boxProps}
        >
          <Box h="full" {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
          </Box>
        </Box>
      )}
    </DefaultDropzone>
  );
}
