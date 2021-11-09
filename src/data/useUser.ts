import useSWR from "swr";
import { User } from "../utils/types/user";
import { fetcher } from "./fetcher";

const useUser = (username: string | string[] | undefined) => {
  if (Array.isArray(username) || !username)
    return {
      repos: [],
      isLoading: null,
      isError: null,
    };

  const { data, error } = useSWR<User>(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUser;
