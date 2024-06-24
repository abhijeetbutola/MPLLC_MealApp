import { useQuery } from "react-query";
import { fetchCategoryData } from "../fetchers/mealFetcher";

const useGetCategoryMeals = ({ category }) => {
  return useQuery({
    queryKey: ["meal-list", { category }],
    queryFn: () => fetchCategoryData(category || 1),
    refetchOnWindowFocus: false,
  });
};

export default useGetCategoryMeals;
