import { FC } from "react";
import Head from "next/head";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
