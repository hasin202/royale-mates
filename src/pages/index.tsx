import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [battles, setBattles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/update-db?playerTag=CL9RULVRV");
        setBattles(response.data);
      } catch (error) {
        console.error("Failed to fetch battles", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      <p>{JSON.stringify(battles)}</p>
    </div>
  );
};

export default IndexPage;
