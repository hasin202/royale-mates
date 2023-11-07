import axios from "axios";
import { DbRow } from "@/lib/types/db-types";
import { Dispatch, useState, FormEvent, ChangeEvent } from "react";
import { handleError } from "@/lib/helpers/handle-error/handle-error";

type Props = {
  setBattles: Dispatch<DbRow[]>;
  setError: Dispatch<string>;
};

const SearchBar: React.FC<Props> = ({ setBattles, setError }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async (playerTag: string) => {
    try {
      const response = await axios.get(`/api/update-db?playerTag=${playerTag}`);
      setBattles(response.data.body.battles);
      setError(""); // Clear any existing errors
    } catch (error) {
      // If error.response exists and has a data property, use it, otherwise use a default message
      if (axios.isAxiosError(error)) {
        console.log(error);
        setError(error.response?.data.error.extraInfo);
      } else {
        handleError(error, "something went wrong when getting battles");
      }
    }
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the search logic here using searchTerm
    try {
      await fetchData(searchTerm);
    } catch {
      setError("Oops we couldnt find that user");
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={handleChange} // This line is necessary to update searchTerm
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
