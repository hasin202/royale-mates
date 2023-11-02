import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data from the API endpoint
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setData(data.name));
    console.log(data);
  }, [data]); // The empty dependency array means this useEffect runs once when component mounts

  return (
    <div>
      <h1>Index Page</h1>
      {data && (
        <div>
          <h2>Data from API:</h2>
          <p>Name: {JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
