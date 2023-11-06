import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [battles, setBattles] = useState();
  useEffect(() => {
    // Fetching data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/update-db?playerTag=LGP89JU");
        setBattles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // The empty dependency array means this useEffect runs once when component mounts

  return (
    <div>
      <h1>Index Page</h1>
      <p>{JSON.stringify(battles)}</p>
    </div>
  );
};

export default IndexPage;
