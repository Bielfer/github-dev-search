import { FC } from "react";
import useRepos from "../data/useRepos";
import { formatDistance, parseISO } from "date-fns";
import { useRouter } from "next/router";

const Repos: FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const { repos } = useRepos(username);

  return (
    <div className="sm:overflow-y-scroll max-h-screen py-6 px-6 sm:px-16 flex-grow">
      {repos.map((repo, index) => {
        const isFirstRepo = index === 0;

        return (
          <div
            key={repo.id}
            className={`${isFirstRepo ? "" : "border-t"} py-2 text-gray-500`}
          >
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <h3 className="text-xl italic hover:underline cursor-pointer">
                {repo.name}
              </h3>
            </a>
            <p>{repo.description}</p>
            <div className="flex items-center italic">
              <img className="h-6" src="/icon-star-gray.svg" alt="" />
              <p className="pr-4">{repo.stargazers_count} stars</p>
              <div className="bg-gray-500 h-2 w-2 rounded-full"></div>
              <p className="pl-4">
                Updated {formatDistance(new Date(), parseISO(repo.pushed_at))}{" "}
                ago
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Repos;
