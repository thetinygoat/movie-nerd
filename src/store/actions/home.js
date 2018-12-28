import * as actionTypes from './actions';
import axios from '../../axios';

export const homeLoaded = movies => {
	console.log('home loaded', movies);
	return {
		type: actionTypes.HOME_LOADED,
		movies: movies,
		loading: false
	};
};

export const homeLoading = () => {
	return dispatch => {
		let api_key = '7c66aca86b489bd1bc08209cc75da0f5';
		axios
			.get(
				'discover/movie?api_key=' +
					api_key +
					'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			)
			.then(res => {
				console.log('[action creator]', res.data.results);
				dispatch(homeLoaded(res.data.results));
			});
	};
};
