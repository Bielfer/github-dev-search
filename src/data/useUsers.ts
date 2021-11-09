import axios from "axios";
import useSWR from "swr";
import { SearchUser } from "../utils/types/user";

const useUsers = (search: string) => {
  const { data, error } = useSWR<Array<SearchUser>>(
    `https://api.github.com/search/users?q=${search}&per_page=5`,
    (url) => axios.get(url).then((res) => res.data.items)
  );

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUsers;
