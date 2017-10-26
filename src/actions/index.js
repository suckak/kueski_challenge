import { actionTypes } from "../utils/constants";

export const setUser = (val) => {
    return { type : actionTypes.SET_USER, payload : val };
};
