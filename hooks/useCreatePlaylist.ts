import { useMutation } from "@tanstack/react-query";
import { createNewSongPlaylist } from "@/services/playlist";
import { PlaylistProps } from "@/templates/shared/types";

export function useCreatePlaylist() {
  return useMutation({
    mutationKey: ["createPlaylist"],
    mutationFn: (data: PlaylistProps) => createNewSongPlaylist(data),
  });
}
