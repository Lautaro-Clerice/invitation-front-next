import apiResponse from "@/lib/api";
import { Guest } from "@/templates/shared/types";

export const createGuestRsvp = async (data: Guest) => {
  try {
    const response = await apiResponse.post("/guests", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
