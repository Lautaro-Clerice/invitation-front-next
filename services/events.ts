import apiResponse from "@/lib/api";

export const getEventBySlug = async (slug: string) => {
  try {
    const response = await apiResponse.get(`/events/public/${slug}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
