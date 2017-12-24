import * as types from "./constants";


const initialState = {
	items: [],
	prixTotal: Number,
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.TODOS_ADD_TODO:
			var {items} = state;

			items.push(
				{
					id: Date.now(),
					text: action.payload.text,
					completed: false,
					count: 1,
					acheter: 0,
					prix: action.payload.prix,
					description: action.payload.description,
					url_image: action.payload.url_image,
				}
			);
			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_REMOVE_TODO:
			var {items} = state;
			items.splice(action.payload.index,1);
			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_FINISH_TODO:
			var {items} = state;
			items[action.payload.index].completed= !items[action.payload.index].completed ;
			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_EDIT_TODO:
			var {items} = state;
			items[action.payload.index].text= action.payload.text ;
			items[action.payload.index].prix= action.payload.prix ;
			items[action.payload.index].description= action.payload.description ;
			items[action.payload.index].url_image= action.payload.url_image ;
			return {
				...state,
				items: items
			};
			break;

		case types.COUNT_INCREMENT:
			var {items} = state;
			items[action.payload.index].count++ ;
			return {
				...state,
				items: items
			};
			break;

		case types.COUNT_DECREMENT:
			var {items} = state;
			if(items[action.payload.index].count>0)
			{
				items[action.payload.index].count-- ;
			}
			return {
				...state,
				items: items
			};
			break;

		case types.COUNT_DECREMENT_ACHAT:
			var {items} = state;
			if(items[action.payload.index].count>0)
			{
				items[action.payload.index].acheter-- ;
			}
			return {
				...state,
				items: items
			};
			break;		

		case types.COUNT_INCREMENT_ACHAT:
			var {items} = state;
			items[action.payload.index].acheter++ ;
			return {
				...state,
				items: items
			};
			break;

		case types.ZERO_ACHAT:
			var {items} = state;
			items[action.payload.index].acheter=0 ;
			return {
				...state,
				items: items
			};
			break;

		case types.ALL_ZERO_ACHAT:
			var {items} = state;
			for(var i=0; i<items.length; i++)
			{
				items[i].acheter=0 ;
			}
			return {
				...state,
				items: items
			};
			break;

		case types.PRIX_TOTAL:
			var {items} = state;
			var total=0;
			for(var i=0; i<items.length; i++)
			{
				total+=(items[i].prix*items[i].acheter) ;
			}
			console.log("prix total : ", total);
			return {
				...state,
				prixTotal: total,
			};
			break;

		default:
			return state;

	}
};

