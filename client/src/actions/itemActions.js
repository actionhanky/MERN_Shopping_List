import { ADD_ITEM,  DELETE_ITEM, GET_ITEMS } from "./types";

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};