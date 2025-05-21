import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

const APIContext = createContext<{
  data: Record<string, unknown>;
  setData: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}>({
  data: {},
  setData: () => {},
});

export function APIProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState({});

  return (
    <APIContext.Provider value={{ data, setData }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPI<T>({
  fetcher,
  name,
}: {
  fetcher: () => Promise<T>;
  name: string;
}) {
  const { data, setData } = useContext(APIContext);

  const request = useCallback(() => {
    fetcher().then((res) => {
      setData((data) => {
        return { ...data, [name]: res };
      });
    });
  }, [fetcher, name, setData]);

  useEffect(() => {
    const hasData = data[name];
    if (hasData) {
      return;
    }
    request();
  }, [data, name, request]);

  return { data: data[name] as T | undefined, refetch: request };
}
