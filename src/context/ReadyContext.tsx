import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const ReadyContext = createContext({
  ready: false,
  setReady: (_value: boolean) => {},
});

export function ReadyProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const value = useMemo(() => ({ ready, setReady }), [ready]);

  useEffect(() => {
    const failSafe = window.setTimeout(() => setReady(true), 3200);
    return () => window.clearTimeout(failSafe);
  }, []);

  return <ReadyContext.Provider value={value}>{children}</ReadyContext.Provider>;
}

export function useReady() {
  return useContext(ReadyContext);
}
