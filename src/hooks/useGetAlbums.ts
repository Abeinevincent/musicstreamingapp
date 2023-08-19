import { useQuery } from "@tanstack/react-query";
import { myAPIClient } from "../api/axiosInstance";

const getAlbums = async (artistId: string | unknown) => {
  try {
    const res = await myAPIClient.get(`/${artistId}/albums`);
  
    return res.data;
  } catch (err) {
  }
};

function useGetAlbums(artistId: string | unknown) {
  return useQuery({
    queryKey: ["toptracks"],
    queryFn: () => getAlbums(artistId),
  });
}

export default useGetAlbums;
