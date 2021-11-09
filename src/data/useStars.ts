import useSWR from "swr";
import { Star } from "../utils/types/star";
import { fetcher } from "./fetcher";

const useStars = (username: string | string[] | undefined) => {
  if (Array.isArray(username) || !username)
    return {
      repos: [],
      isLoading: null,
      isError: null,
    };

  const { data, error } = useSWR<Array<Star>>(
    `https://api.github.com/users/${username}/starred`,
    fetcher
  );

  return {
    starCount: data?.length,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useStars;
