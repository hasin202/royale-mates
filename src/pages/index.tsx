import React, { useState } from "react";
import SearchBar from "@/components/search-bar";
import { DbRow } from "@/lib/types/db-types";
import { APIError } from "@/lib/types/types";
import { useGlobalState } from "@/lib/contexts/global-context";

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
    <div>
      <h1>Index Page</h1>
      {/* <button onClick={fetchData} className="bg-white text-black">
        UPDATE
      </button> */}
      <SearchBar />
      {/* Render error message if it exists */}
      {error && <p className="error-message">{JSON.stringify(error)}</p>}
      {/* Render battles if no error */}
      {!error && (
        <>
          <p>{JSON.stringify(playerData)}</p>
          <p>{JSON.stringify(battles)}</p>
        </>
      )}
    </div>
  );
};

export default IndexPage;
