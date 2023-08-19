import "./singleartist.css";

function SingleArtist({ album }: { album: any }) {
  return (
    <div className="single_artist_wrapper">
      <img
        src={album?.album?.cover_medium}
        alt=""
        width="100%"
        height="60%"
        style={{ objectFit: "cover" }}
      />
      <div className="single_artist_content">
        <h3>{album?.title}</h3>
        <p>2018</p>
      </div>
    </div>
  );
}

export default SingleArtist;
