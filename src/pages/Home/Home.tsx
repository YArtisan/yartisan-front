import ArtisantList from "@molecules/ArtisantList";
import SearchBanner from "@molecules/SearchBanner";

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <SearchBanner />
      <ArtisantList />
    </div>
  );
}

export default Home;
