/* eslint-disable prettier/prettier */

import axios from 'axios';
import {ENV} from './env';
import {Apis} from './Api';

const getPopulaarMovies = async () => {
  try {
    const response = await axios.get(`${ENV.baseUrl}${Apis.POPULAR}`, {
      headers: {
        Authorization: `Bearer ${ENV.Token}`,
      },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.warn(error.message);
  }
};
