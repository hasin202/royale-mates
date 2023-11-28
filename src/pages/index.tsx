import React from "react";
import NavBar from "@/components/navbar";
import ShowData from "@/components/show-data";
import { useGlobalState } from "@/lib/contexts/global-context";

const IndexPage = () => {
  const { error } = useGlobalState();
  return (
    <div className="w-full ">
      <NavBar />
      <div className={`px-4 md:px-24 lg:px-48 xl:px-96 2xl:px-[30rem] py-8`}>
        {/* <button onClick={fetchData} className="bg-white text-black">
        UPDATE
      </button> */}
        {/* Render error message if it exists */}
        {error && <p className="error-message">{JSON.stringify(error)}</p>}
        {/* Render battles if no error */}
        <ShowData />
      </div>
    </div>
  );
};

export default IndexPage;
