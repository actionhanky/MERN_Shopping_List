import uuid from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types';

const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Sugar' },
		{ id: uuid(), name: 'Water' },
	],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
			};
		default:
			return state;
	}
};
