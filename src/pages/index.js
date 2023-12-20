import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {

  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      <h2 style={{ textAlign: "center", marginTop: "10%" }}>UserName: {session?.user?.name}, Email: {session?.user?.email}</h2>
    </div>
  );
};

export default HomePage;
