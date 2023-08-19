import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import SingleTrack from "../../components/singletrack/SingleTrack";
import useGetTracks from "../../hooks/useGetTracks";
import "./home.css";
import { useState } from "react";

function Home() {
  const [searchquery, setSearchQuery] = useState("");

  const { data, isLoading, refetch } = useGetTracks(searchquery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    // Call refetch to trigger the query again with the updated search query
    refetch();
  };

  return (
    <div className="home_wrapper">
      <Header
        searchquery={searchquery}
        handleSearchChange={handleSearchChange}
        setSearchQuery={setSearchQuery}
      />
      <Loader isLoading={isLoading} />

      {searchquery.length < 1 ? (
        <div className="search_fav_tracks">Search your favourite tracks! </div>
      ) : (
        <>
          {isLoading || searchquery.length < 3 ? (
            <Loader isLoading={isLoading} />
          ) : (
            <>
              {data?.tracks?.data?.length === 0 ? (
                <div className="no_track_found">
                  No tracks found for your search!
                </div>
              ) : (
                <div className="track_list">
                  {data?.tracks?.data.map((item: any) => (
                    <SingleTrack key={item.id} item={item} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
