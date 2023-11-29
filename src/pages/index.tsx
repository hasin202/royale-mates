import React from "react";
import NavBar from "@/components/navbar";
import Home from "@/components/home";
import { useGlobalState } from "@/lib/contexts/global-context";
import Loader from "@/components/loader";
import Error from "@/components/error";

const IndexPage = () => {
  const { error, loading, battles } = useGlobalState();
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />
      <div className={`w-80 md:w-[32rem] 2xl:w-[38rem]`}>
        {/* Render error message if it exists */}
        {error && <Error />}
        {/* Render battles if no error */}
        <Home />
        {loading && !battles && (
          <div className="w-full flex justify-center mt-12">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
