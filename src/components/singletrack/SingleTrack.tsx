import { useNavigate } from "react-router-dom";
import { formatDuration } from "../functions/durationConversion";

function SingleTrack({ item }: { item: any }) {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/artist/${id}`);
  };

  return (
    <div className="single_track" onClick={() => handleClick(item?.artist?.id)}>
      <img
        src={item?.artist?.picture}
        alt=""
        width="100%"
        height="60%"
        style={{ objectFit: "cover" }}
      />
      <div className="track_content">
        <p>{formatDuration(item?.duration)}</p>
        <h3>{item?.title}</h3>
        <p>By {item?.artist?.name}</p>
      </div>
    </div>
  );
}

export default SingleTrack;
