import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import axios from '../../axios';

export default class Home extends Component {
	componentDidMount() {
		axios.get(
			'discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		);
	}
	render() {
		return (
			<div>
				<MovieCard />
			</div>
		);
	}
}
