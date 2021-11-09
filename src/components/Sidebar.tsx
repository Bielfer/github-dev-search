import { FC } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import useUser from "../data/useUser";
import { useRouter } from "next/router";
import useStars from "../data/useStars";

const Sidebar: FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const { user, isLoading } = useUser(username);
  const { starCount } = useStars(username);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <>404</>;

  const userHasTwitter = user.twitter_username;

  return (
    <div className="h-screen bg-gray-600 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center py-8 justify-between flex-shrink-0">
      <Link href="/">
        <a className="flex sm:hidden items-center text-white w-full hover:underline cursor-pointer space-x-2">
          <IoIosArrowBack fontSize="1.5rem" /> Voltar
        </a>
      </Link>
      <img
        className="w-2/3 rounded-lg"
        src={user.avatar_url}
        alt="User Image"
      />
      <div className="w-full px-3 text-white">
        {user.name ? <h1 className="text-3xl italic">{user.name}</h1> : <></>}
        <p className="italic text-xl">@{username}</p>
        {user.bio ? <p className="text-gray-400 py-4">{user.bio}</p> : <></>}
        <div className="flex flex-wrap space-x-1 italic">
          <div className="flex space-x-1 items-center text-sm">
            <img className="h-6" src="/icon-followers.svg" />
            <p>{user.followers} followers</p>
          </div>
          <div className="flex space-x-1 items-center text-sm">
            <img className="h-6" src="/icon-heart.svg" />
            <p>{user.following} following</p>
          </div>
          <div className="flex space-x-1 items-center text-sm">
            <img className="h-6" src="/icon-star-white.svg" />
            <p>{starCount || 0} stars</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1 w-full px-3 text-white">
        {user.company ? (
          <div className="flex space-x-1 items-center">
            <img className="h-6" src="/icon-building.svg" />
            <p className="italic pl-2">{user.company}</p>
          </div>
        ) : (
          <></>
        )}
        {user.location ? (
          <div className="flex space-x-1 items-center">
            <img className="h-6" src="/icon-location.svg" />
            <p className="italic pl-2">{user.location}</p>
          </div>
        ) : (
          <></>
        )}
        {user.email ? (
          <div className="flex space-x-1 items-center">
            <img className="h-6" src="/icon-mail.svg" />
            <p className="italic pl-2">{user.email}</p>
          </div>
        ) : (
          <></>
        )}
        {user.blog ? (
          <Link href={user.blog}>
            <a
              className="flex space-x-1 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-6" src="/icon-chain.svg" />
              <p className="italic pl-2 hover:underline cursor-pointer">
                {user.blog}
              </p>
            </a>
          </Link>
        ) : (
          <></>
        )}
        {user.twitter_username ? (
          <Link href={`https://twitter.com/${user.twitter_username}`}>
            <a
              className="flex space-x-1 items-center hover:underline cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-6" src="/icon-twitter.svg" />
              <p className="italic pl-2">@{user.twitter_username}</p>
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <Link href="/">
        <button className="hidden sm:block bg-white text-gray-900 italic px-8 py-2 rounded-md">
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
