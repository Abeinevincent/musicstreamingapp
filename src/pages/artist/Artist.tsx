import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SingleArtist from "../../components/singleartist/SingleArtist";
import "./artist.css";
import { useEffect } from "react";
import useGetTopTracks from "../../hooks/useGetTopTracks";
import useGetAlbums from "../../hooks/useGetAlbums";
import Loader from "../../components/loader/Loader";
import { formatDuration } from "../../components/functions/durationConversion";

function Artist() {
  // Get the parameters from the URL
  const { artistId } = useParams<{ artistId: string }>();

  const albums = useGetAlbums(artistId);
  const topTracks = useGetTopTracks(artistId);

  useEffect(() => {
    albums.refetch();
    topTracks.refetch();
  }, [artistId]);

  return (
    <>
      <Header />
      <div className="artist_wrapper">
        <div className="artist_upper">
          <div
            style={{
              background: `url(${albums?.data?.tracks?.data[0]?.album?.cover_medium})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="airtist_upper_image_wrapper"
          >
            <h3 style={{ overflow: "hidden" }}>
              {albums?.data?.tracks?.data[0]?.artist?.name}
            </h3>
            <p
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #777",
                width: "max-content",
                overflow: "hidden",
              }}
            >
              {albums?.data?.tracks?.data[0]?.id} Fans
            </p>
            <p style={{ overflow: "hidden" }}>
              {albums?.data?.tracks?.data[0]?.title}
            </p>
          </div>
          <div className="artist_upper_content">
            <h3 style={{ textAlign: "center", overflow: "hidden" }}>
              Top Tracks
            </h3>
            <ol className="top_tracks">
              {topTracks?.isLoading ? (
                <Loader isLoading={topTracks?.isLoading} />
              ) : (
                topTracks?.data?.tracks?.data?.slice(0, 5).map((track: any) => (
                  <li className="upper-content_text" key={track?.id}>
                    {track?.title} {formatDuration(track?.duration)}
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>

        <div className="artist_lower">
          <h3>Albums</h3>
          <div className="albums_list">
            {albums?.isLoading ? (
              <Loader isLoading={topTracks?.isLoading} />
            ) : (
              albums?.data?.tracks?.data?.map((album: any) => (
                <SingleArtist key={album?.id} album={album} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Artist;
