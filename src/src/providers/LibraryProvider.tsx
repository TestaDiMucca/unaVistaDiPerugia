import React, { createContext, useCallback, useEffect, useState } from 'react';

interface LibraryContextValues {
  library: EnrichedFile[];
  setLibrary: (_: EnrichedFile[]) => void;
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
  const [library, setLibrary] = useState<EnrichedFile[]>([]);
  const [renderKey, setRenderKey] = useState(0);

  const handleSetLibrary = useCallback((lib: EnrichedFile[]) => {
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
