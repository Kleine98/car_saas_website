import axiosInstance from "./axiosConfig";

export const getCars = async () => {
  try {
    const response = await axiosInstance.get("/cars");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axiosInstance.get(`/cars/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
