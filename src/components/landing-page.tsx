import SearchBar from "./search-bar";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen w-72 md:w-96 lg:w-[30rem] items-center justify-center">
      <div className="font-supercell text-center text-2xl md:text-3xl">
        <h1>Mates</h1>
        <h1>Royale</h1>
      </div>
      <div className="text-center md:text-lg lg:text-xl">
        <p>
          Your digital logbook for all Clash Royale showdowns against the people
          you know best - your friends and clanmates. Get started by searching
          your player tag!
        </p>
      </div>
      <SearchBar isLandingPage={true} />
    </div>
  );
};

export default LandingPage;
