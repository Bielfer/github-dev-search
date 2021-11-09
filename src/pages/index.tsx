import { ChangeEvent, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../components/Layout";
import Link from "next/link";
import useUsers from "../data/useUsers";
import useTimeout from "../utils/useTimeout";

const Home = () => {
  const [search, setSearch] = useState("");
  const [toRequestSearch, setToRequestSearch] = useState("");
  const minimumLength = toRequestSearch.length > 4;

  const { users } = useUsers(minimumLength ? toRequestSearch : "");
  const { reset } = useTimeout(() => setToRequestSearch(search), 1500);

  return (
    <Layout title="Home | Search Github Profile">
      <div className="h-screen flex flex-col items-center justify-center px-5">
        <h1 className="text-4xl italic text-gray-500">Search Devs</h1>
        <div className="w-full max-w-md flex pt-2">
          <div className="flex-grow relative">
            <input
              className={`border w-full border-gray-600 pl-4 py-1 italic ${
                minimumLength ? "rounded-tl-md" : "rounded-l-md"
              }`}
              placeholder="Type the username here..."
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
                reset();
              }}
            />
            {minimumLength ? (
              <div className="absolute w-full border border-t-0 border-gray-600 rounded-b-md overflow-hidden">
                {users?.map((user) => (
                  <Link key={user.id} href={`/${user.login}`}>
                    <div className="w-full flex items-center hover:bg-gray-200 cursor-pointer py-2 pl-3">
                      <img className="h-12 rounded-md" src={user.avatar_url} />
                      <p className="pl-3">{user.login}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <Link href={search}>
            <button className="flex items-center space-x-1 h-full px-2 text-white bg-gray-600 italic hover:bg-gray-700 rounded-r-md">
              <IoSearchOutline fontSize="1.2rem" />
              <p>Buscar</p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
