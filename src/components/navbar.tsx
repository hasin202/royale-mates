import SearchBar from "./search-bar";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <div
      className={`py-4 w-full bg-slate-800 text-white flex justify-center mb-4`}
    >
      <div className="flex items-center justify-between w-80 md:w-[32rem] 2xl:w-[38rem]">
        <button onClick={() => router.push("/")}>
          <img src={"/Mates-Royale.svg"} className="w-16" />
        </button>
        <SearchBar isLandingPage={false} />
      </div>
    </div>
  );
};

export default NavBar;
