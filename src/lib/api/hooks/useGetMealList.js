import { useQuery } from "react-query";
import { fetchMealData } from "../fetchers/mealFetcher";

const useGetMealList = () => {
  return useQuery(["meal-list"], fetchMealData, {
    refetchOnWindowFocus: false,
  });
};

export default useGetMealList;
