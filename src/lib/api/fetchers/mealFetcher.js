import { Client } from "../client";

const categoryListEndpoint = (category) =>
  `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/1/filter.php?c=${category}`;

export const fetchCategoryData = async (category) => {
  const response = await Client.get(categoryListEndpoint(category));
  return response.data;
};

const menuListEndpoint = () =>
  `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/1/list.php?c=list`;

export const fetchMealData = async () => {
  const response = await Client.get(menuListEndpoint());
  return response.data;
};

export const fetchRandomMeal = async () => {
  const response = await Client.get(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/1/random.php`
  );
  return response.data;
};
