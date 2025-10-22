import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { getEventBySlug } from "@/services/events";

export function useEventBySlug(slug: string) {
  return useQuery({
    queryKey: ["event", slug],
    queryFn: () => {
      return getEventBySlug(slug);
    },
  });
}
