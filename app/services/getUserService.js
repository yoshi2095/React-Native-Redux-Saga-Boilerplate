import {apiGet, apiPost} from '../utils/API';

export const getUser = (user) => {
  console.log("Entered the getUser Service. the user is:", user);
  console.log("now calling get request");
  return apiGet(user);
};