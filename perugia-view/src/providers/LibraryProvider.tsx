import React, { createContext, useCallback, useEffect, useState } from 'react';

interface LibraryContextValues {
  library: File[];
  setLibrary: (_: File[]) => void;
  renderKey: number;
}

export const LibraryContext = createContext<LibraryContextValues>({
  library: [],
  setLibrary: () => {},
  renderKey: 0,
});

interface ProviderProps {}

const LibraryProvider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [library, setLibrary] = useState<File[]>([]);
  const [renderKey, setRenderKey] = useState(0);

  const handleSetLibrary = useCallback((lib: File[]) => {
    setLibrary(lib);
  }, []);

  useEffect(() => {
    setRenderKey(Math.random());
  }, [library.length]);

  return (
    <LibraryContext.Provider
      value={{ library, setLibrary: handleSetLibrary, renderKey }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
