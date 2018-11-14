const GET_USER = "GET_USER_CALL";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_ERROR = "GET_USER_ERROR";

export default = {
    getUser: (user) => {
        return {
            type: "GET_USER",
            user: user
        }
    }
}