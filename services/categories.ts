import apiResponse from "@/lib/api";

export const getCategories = async () => {
  const response = await apiResponse.get("/categories");
  return response.data;
};
