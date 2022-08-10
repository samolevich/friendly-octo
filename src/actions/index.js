import { GET_USERS } from "../constants";

const getUsers = users => ({ type: GET_USERS, payload: users });

export { getUsers };
