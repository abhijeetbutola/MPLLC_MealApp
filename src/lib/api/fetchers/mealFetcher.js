import { Client } from "../client";

const categoryListEndpoint = (category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

export const fetchCategoryData = async (category) => {
  const response = await Client.get(categoryListEndpoint(category));
  return response.data;
};

const menuListEndpoint = () =>
  `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;

export const fetchMealData = async () => {
  const response = await Client.get(menuListEndpoint());
  return response.data;
};


export const fetchRandomMeal = async () => {
  const response = await Client.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
  return response.data;
};
