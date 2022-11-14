import axios from 'axios';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    'X-RapidAPI-Key': 'edb1502117mshed2402580d141bcp1fce4cjsna95c446e2f51',
    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
  }
});
