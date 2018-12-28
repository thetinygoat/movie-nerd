import React, { Component } from 'react';
import axios from '../../axios';

class Home extends Component {
	componentDidMount() {
		let api_key = '7c66aca86b489bd1bc08209cc75da0f5';
		axios
			.get(
				`discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
			)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return <div>hello</div>;
	}
}
export default Home;
