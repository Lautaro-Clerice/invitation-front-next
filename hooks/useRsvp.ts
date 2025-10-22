import { useMutation } from "@tanstack/react-query";
import { createNewSongPlaylist } from "@/services/playlist";
import { Guest, PlaylistProps } from "@/templates/shared/types";
import { createGuestRsvp } from "@/services/rsvp";

export function useRsvp() {
  return useMutation({
    mutationKey: ["createRsvp"],
    mutationFn: (data: Guest) => createGuestRsvp(data),
  });
}
