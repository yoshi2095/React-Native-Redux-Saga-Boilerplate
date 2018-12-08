export const GET_USER_CALL = "GET_USER_CALL";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export default {
    getUser: (user) => {
        console.log('get user function called', user);
        return {
            type: "GET_USER_CALL",
            user: user
        }
    }
}