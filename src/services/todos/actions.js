
import * as types from "./constants";

export function todos_add_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_ADD_TODO,
			payload: payload
		});

	}
}

export function todos_remove_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_REMOVE_TODO,
			payload: payload
		});

	}
}

export function todos_finish_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_FINISH_TODO,
			payload: payload
		});

	}
}

export function todos_edit_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_EDIT_TODO,
			payload: payload
		});

	}
}

export function count_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_INCREMENT,
			payload: payload
		});

	}
}

export function count_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_DECREMENT,
			payload: payload
		});

	}
}


export function count_increment_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_INCREMENT_ACHAT,
			payload: payload
		});

	}
}

export function count_decrement_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_DECREMENT_ACHAT,
			payload: payload
		});

	}
}

export function zero_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ZERO_ACHAT,
			payload: payload
		});

	}
}

export function all_zero_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ALL_ZERO_ACHAT,
			payload: payload
		});

	}
}

export function prix_total(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.PRIX_TOTAL,
			payload: payload
		});

	}
}