import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FetchFunction<T> {
  (value: any): Promise<T>;
}

function useDataMutate<T>(
  key: (string | number)[],
  fn: FetchFunction<T>,
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    }
  });
}

export default useDataMutate;
