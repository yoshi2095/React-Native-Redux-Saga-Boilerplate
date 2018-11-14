import {apiGet, apiPost} from '../utils/API';

export const getUser = (user) => {
  return apiGet(user);
};