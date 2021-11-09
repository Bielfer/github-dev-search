import useSWR from "swr";
import { Repo } from "../utils/types/repo";
import { fetcher } from "./fetcher";

const useRepos = (username: string | string[] | undefined) => {
  if (Array.isArray(username) || !username)
    return {
      repos: [],
      isLoading: null,
      isError: null,
    };

  const { data, error } = useSWR<Array<Repo>>(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    fetcher
  );

  data?.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    repos: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRepos;
