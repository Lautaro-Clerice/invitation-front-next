import apiResponse from "@/utils/api";
import { PlaylistProps } from "@/templates/shared/types";

export const createNewSongPlaylist = async (
  form: PlaylistProps
): Promise<PlaylistProps> => {
  try {
    const response = await apiResponse.post("/songs", form);
    return response.data;
  } catch (error) {
    throw error;
  }
};
