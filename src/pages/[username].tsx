import { FC } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Repos from "../components/Repos";

const Username: FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <Layout title={`Profile | ${username}`}>
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <Repos />
      </div>
    </Layout>
  );
};

export default Username;
