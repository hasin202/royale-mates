import SearchBar from "./search-bar";

const NavBar: React.FC = () => {
  return (
    // <div className="py-4 px-4 w-full bg-slate-800 text-white flex items-center justify-between">
    <div
      className={`py-4 w-full bg-slate-800 text-white flex justify-center mb-4`}
    >
      <div className="w-80 md:w-[32rem] 2xl:w-[38rem] flex items-center justify-between">
        <img src={"/Mates-Royale.svg"} className="w-16" />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
