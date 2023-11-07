import React from "react";
import SearchBar from "@/components/search-bar";
import { useGlobalState } from "@/lib/contexts/global-context";
import NavBar from "@/components/navbar";

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
    <div className="w-full">
      <NavBar />
      <h1>Index Page</h1>
      {/* <button onClick={fetchData} className="bg-white text-black">
        UPDATE
      </button> */}

      {/* Render error message if it exists */}
      {error && <p className="error-message">{JSON.stringify(error)}</p>}
      {/* Render battles if no error */}
      {!error && (
        <>
          <p className="break-all">{JSON.stringify(playerData)}</p>
          <p className="break-all">{JSON.stringify(battles)}</p>
        </>
      )}
    </div>
  );
};

export default IndexPage;
