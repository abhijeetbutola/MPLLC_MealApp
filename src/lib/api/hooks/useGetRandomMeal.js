import { useQuery } from "react-query";
import { fetchRandomMeal } from "../fetchers/mealFetcher";

const useGetRandomMeals = () => {
  return useQuery(["random-meal"], fetchRandomMeal, {
    refetchOnWindowFocus: false,
  });
};

export default useGetRandomMeals;
