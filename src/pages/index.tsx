import React from "react";
import NavBar from "@/components/navbar";
import ShowData from "@/components/show-data";
import { useGlobalState } from "@/lib/contexts/global-context";
import { horizontalPagePadding } from "@/lib/styles";

const IndexPage = () => {
  const { battles, playerData, error } = useGlobalState();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/api/update-db?playerTag=R90PRV0PY");
  //     setBattles(response.data);
  //     setError(""); // Clear any existing errors
  //   } catch (error) {
  //     // If error.response exists and has a data property, use it, otherwise use a default message
  //     if (axios.isAxiosError(error)) {
  //       console.log(error);
  //       setError(error.response?.data.error.extraInfo);
  //     }
  //   }
  // };

  return (
    <div className="w-full bg-red-300 md:bg-blue-300 lg:bg-green-300">
      <NavBar />
      <div className={`${horizontalPagePadding} py-8`}>
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
