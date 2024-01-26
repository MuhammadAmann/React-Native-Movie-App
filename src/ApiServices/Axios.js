/* eslint-disable prettier/prettier */

import axios from 'axios';
import {ENV} from './env';
import {Apis} from './Api';

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios( {
      method: Apis.NOW_PLAYING.method,
      url: ENV.baseUrl + Apis.NOW_PLAYING.endPoint,
      headers: {
        Authorization: `Bearer ${ENV.Token}`,
      },
    });
    const res = response.data;
    return res;
  }
   catch (error) {
    console.warn(error.message);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios( {
      method: Apis.UPCOMING.method,
      url: ENV.baseUrl + Apis.UPCOMING.endPoint,
      headers: {
        Authorization: `Bearer ${ENV.Token}`,
      },
    });
    const res = response.data;
    return res;
  }
   catch (error) {
    console.warn(error.message);
  }
};
export const getTopRatedMovies = async () => {
  try {
    const response = await axios( {
      method: Apis.TOP_RATED.method,
      url: ENV.baseUrl + Apis.TOP_RATED.endPoint,
      headers: {
        Authorization: `Bearer ${ENV.Token}`,
      },
    });
    const res = response.data;
    return res;
  }
   catch (error) {
    console.warn(error.message);
  }
};
export const getPopularMovies = async () => {
  try {
    const response = await axios( {
      method: Apis.POPULAR.method,
      url: ENV.baseUrl + Apis.POPULAR.endPoint,
      headers: {
        Authorization: `Bearer ${ENV.Token}`,
      },
    });
    const res = response.data;
    return res;
  }
   catch (error) {
    console.warn(error.message);
  }
};
