import axios from "axios";

const apiKey = "pk_d43da761eff74530b928ee9e97a2df89"; // Replace with your IEX Cloud publishable token

const api = axios.create({
  baseURL: "https://cloud.iexapis.com/v1",
  params: {
    token: apiKey, // Include the API key as a query parameter for all requests
  },
});

export const loadQuotesForStock = (symbol) => {
  return api.get(`/stock/${symbol}/quote`).then((res) => res.data);
};

export const loadLogoForStock = (symbol) => {
  return api.get(`/stock/${symbol}/logo`).then((res) => res.data.url);
};

export const loadRecentNewsForStock = (symbol) => {
  return api.get(`/stock/${symbol}/news`).then((res) => res.data);
};

export const loadChartForStock = (symbol, range) => {
  return api.get(`/stock/${symbol}/chart/${range}`).then((res) => res.data);
};
