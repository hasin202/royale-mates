import axios from "axios";
import { DbRow } from "@/lib/types/db-types";
import { Dispatch, useState, FormEvent, ChangeEvent } from "react";
import { handleError } from "@/lib/helpers/handle-error/handle-error";
import { APIError } from "@/lib/types/types";

type Props = {
  setBattles: Dispatch<DbRow[]>;
  setError: Dispatch<APIError | string>;
  setPlayerData: Dispatch<any>;
};

const SearchBar: React.FC<Props> = ({
  setBattles,
  setError,
  setPlayerData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async (playerTag: string) => {
    try {
      const playerData = await axios.get(
        `/api/get-user-data?playerTag=${playerTag}`
      );
      setPlayerData(playerData.data);
      const response = await axios.get(`/api/update-db?playerTag=${playerTag}`);
      setBattles(response.data.body);
      setError("");
    } catch (error) {
      // If error.response exists and has a data property, use it, otherwise use a default message
      if (axios.isAxiosError(error)) {
        console.log(error);
        setError(error.response?.data.error);
      } else {
        setError({ message: "something went wrong" });
      }
    }
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the search logic here using searchTerm
    try {
      await fetchData(searchTerm);
    } catch (error) {
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
