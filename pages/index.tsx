import type { NextPage } from "next";
import Head from "next/head";
import SetUpModal from "../components/SetUpModal";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CHRONIFI-Setup</title>
        <meta
          name="description"
          content="Account link, connect you accounts to start tracking"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SetUpModal></SetUpModal>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
