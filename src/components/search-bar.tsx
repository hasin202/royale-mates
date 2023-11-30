import { useState, FormEvent, ChangeEvent } from "react";
import { cleanUserTag } from "@/lib/helpers/clean-user-tag/clean-user-tag";
import { useRouter } from "next/router";
import { useGlobalState } from "@/lib/contexts/global-context";

interface ComponentProps {
  isLandingPage: boolean;
}

const SearchBar: React.FC<ComponentProps> = ({ isLandingPage }) => {
  const router = useRouter();
  const { playerTag } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState(playerTag || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the search logic here using searchTerm
    let tag = cleanUserTag(searchTerm);
    router.push(`/${tag}`);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`flex items-center h-9 ${isLandingPage ? "w-full" : ""}`}
      >
        <div
          className={`bg-gray-200 rounded-tl rounded-bl p-1 text-black h-full`}
        >
          #
        </div>
        <input
          type="text"
          onChange={handleChange}
          className={`focus:outline-none text-black p-1 rounded-none h-full ${
            isLandingPage ? "w-full border border-gray-200" : "w-36"
          }`}
          placeholder="player tag"
          value={searchTerm}
        />
        <button
          type="submit"
          className={`bg-gray-200 rounded-tr rounded-br p-1 h-full`}
        >
          <img src={"/search.svg"} alt="search button" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
