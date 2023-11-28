import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import { useGlobalState } from "@/lib/contexts/global-context";
import { cleanUserTag } from "@/lib/helpers/clean-user-tag/clean-user-tag";

const SearchBar: React.FC = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setPlayerData, setBattles, setError, setPlayerTag, setLoading } =
    useGlobalState();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async (playerTag: string) => {
    try {
      setLoading(true);
      let tag = cleanUserTag(playerTag);
      setPlayerTag(tag);
      const playerData = await axios.get(`/api/get-user-data?playerTag=${tag}`);
      setPlayerData(playerData.data.body);
      const response = await axios.get(`/api/update-db?playerTag=${tag}`);
      setBattles(response.data.body);
      setError(undefined);
      tag = "";
    } catch (error) {
      // If error.response exists and has a data property, use it, otherwise use a default message
      if (axios.isAxiosError(error)) {
        console.log(error);
        setError(error.response?.data.error);
      } else {
        setError({ message: "something went wrong" });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the search logic here using searchTerm
    try {
      await fetchData(searchTerm);
    } catch (error) {
      setError({ message: "Oops we couldnt find that user" });
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="bg-gray-100 rounded-tl rounded-bl p-1 text-black">
          #
        </div>
        <input
          type="text"
          onChange={handleChange}
          className="focus:outline-none text-black p-1 rounded-none"
          placeholder="player tag"
        />
        <button type="submit">
          <img
            src={"/search.svg"}
            className="bg-gray-100 rounded-tr rounded-br p-1"
          />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
