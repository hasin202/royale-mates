import React from "react";
import NavBar from "@/components/navbar";
import Data from "@/components/data";
import Error from "@/components/error";
import Footer from "@/components/footer";
import { useGlobalState } from "@/lib/contexts/global-context";

const Home = () => {
  const { error } = useGlobalState();
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />
      <div className={`w-80 md:w-[32rem] 2xl:w-[38rem]`}>
        {/* Render error message if it exists */}
        {error && <Error />}
        {/* Render battles if no error */}

        <Data />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
