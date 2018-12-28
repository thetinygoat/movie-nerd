import * as actionTypes from '../actions/actions';
let initialState = {
	movies: [],
	loading: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.HOME_LOADED:
		console.log(action.movies);
		return {
			...state,
			movies: [...action.movies],
			loading: action.loading
		};
	default:
		return state;
	}
};

export default reducer;
