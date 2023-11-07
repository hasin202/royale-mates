import SearchBar from "./search-bar";
import { horizontalPagePadding } from "@/lib/styles";

const NavBar: React.FC = () => {
  return (
    // <div className="py-4 px-4 w-full bg-slate-800 text-white flex items-center justify-between">
    <div
      className={`${horizontalPagePadding} py-4 w-full bg-slate-800 text-white flex items-center justify-between`}
    >
      <img src={"/Mates-Royale.svg"} className="w-16" />
      <SearchBar />
    </div>
  );
};

export default NavBar;
