import * as types from "./constants";


const initialState = {
	value: 0,
};

export default function reducer(state = initialState, action)
{
	switch(action.type)
	{

		default:
			return state;
			break;
	};
};
