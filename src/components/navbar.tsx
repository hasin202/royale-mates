import SearchBar from "./search-bar";

const NavBar: React.FC = () => {
  return (
    // <div className="py-4 px-4 w-full bg-slate-800 text-white flex items-center justify-between">
    <div
      className={`px-4 md:px-24 lg:px-48 xl:px-96 2xl:px-[30rem] py-4 w-full bg-slate-800 text-white flex items-center justify-between`}
    >
      <img src={"/Mates-Royale.svg"} className="w-16" />
      <SearchBar />
    </div>
  );
};

export default NavBar;
