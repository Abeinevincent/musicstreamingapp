import { useQuery } from "@tanstack/react-query";
import { myAPIClient } from "../api/axiosInstance";

const getTopTracks = async (artistId: string | unknown) => {
  try {
    const res = await myAPIClient.get(`/${artistId}/toptracks`);

    return res.data;
  } catch (err) {
  }
};

function useGetTopTracks(artistId: string | unknown) {
  return useQuery({
    queryKey: ["toptracks"],
    queryFn: () => getTopTracks(artistId),
  });
}

export default useGetTopTracks;
