import fetcher from "@/libs/fetcher";
import useSWR from "swr";

interface IdeaHooksProps {
  page: number
  perPage: number
}

function useIdeaList({ page, perPage }: IdeaHooksProps) {
  const { data, error, isLoading } = useSWR(
    `https://suitmedia.com/api/ideas?page[number]=${page}&page[size]=${perPage}&filter[published_until]=2023-12-23+23:59:59&append[]=small_image&append[]=medium_image`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
}

export default useIdeaList;
