import axios from 'axios';

export const getAllData = async (action, apiKey) => {
  try {
    const response = await axios.get('https://apiv3.apifootball.com', {
      params: {
        action: action,
        APIkey: apiKey,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const getEuropesTopLeagues = async (action, apiKey) => {
  const leagues = await getAllData(action, apiKey);

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
