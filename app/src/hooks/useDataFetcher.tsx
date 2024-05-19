import { useQuery } from "@tanstack/react-query";

interface FetchFunction<T> {
  (): Promise<T>;
}

function useDataFetcher<T>(
  key: (string | number)[],
  fn: FetchFunction<T>,
) {
  return useQuery({
    queryKey: key,
    queryFn: fn
  });
}

export default useDataFetcher;
