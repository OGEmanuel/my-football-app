import axios from 'axios';

const URL = 'https://apiv3.apifootball.com';
const API_KEY =
  '7e702b279fbdfc88ba4fc2ba1c668e72409adabb24f767abbb18261e21dd593f';

export const getAllData = async action => {
  try {
    const response = await axios.get(URL, {
      params: {
        action: action,
        APIkey: API_KEY,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const getEuropesTopLeagues = async action => {
  const leagues = await getAllData(action);

  const topLeagues = [
    leagues[2],
    leagues[3],
    leagues[4],
    leagues[5],
    leagues[7],
    leagues[9],
  ];

  return topLeagues;
};

export function getCountryById(countries, id) {
  return countries.find(country => country.country_id === id);
}
