import { useQuery } from "@tanstack/react-query";
import { myAPIClient } from "../api/axiosInstance";

const getTracks = async (searchquery: string) => {
  try {
    const res = await myAPIClient.get(`/tracks?q=${searchquery}`);
    return res.data;
  } catch (err: any) {
    return { error: err?.message };
  }
};

function useGetTracks(searchquery: string) {
  return useQuery({
    queryKey: ["tracks"],
    queryFn: () => getTracks(searchquery),
  });
}

export default useGetTracks;
