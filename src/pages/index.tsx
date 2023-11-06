import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [battles, setBattles] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/update-db?playerTag=CL9RULVRV");
  //       setBattles(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch battles", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/update-db?playerTag=CL9RULVRV");
      setBattles(response.data);
    } catch (error) {
      console.error("Failed to fetch battles", error);
    }
  };

  return (
    <div>
      <h1>Index Page</h1>
      <button onClick={fetchData} className="bg-white text-black">
        UPDATE
      </button>
      <p>{JSON.stringify(battles)}</p>
    </div>
  );
};

export default IndexPage;
