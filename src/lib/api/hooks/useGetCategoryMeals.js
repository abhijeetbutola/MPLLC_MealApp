import { useQuery } from "react-query";
import { fetchCategoryData } from "../fetchers/mealFetcher";

const useGetCategoryMeals = ({ category }) => {
  return useQuery({
    queryKey: ["meal-list", { category }],
    queryFn: () => fetchCategoryData(category),
    refetchOnWindowFocus: false,
  });
};

export default useGetCategoryMeals;
