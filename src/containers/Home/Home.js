import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import * as homeAction from '../../store/actions/home';

class Home extends Component {
	componentDidMount() {
		this.props.homeLoading();
	}
	render() {
		let m = null;
		if (this.props.home.loading) {
			m = 'loading...';
		} else {
			m = this.props.home.movies.map(movie => {
				return <MovieCard />;
			});
		}
		return <div>{m}</div>;
	}
}

const mapStateToProps = state => {
	return {
		home: state.home
	};
};
const mapDispatchToProps = dispatch => {
	return {
		homeLoading: () => dispatch(homeAction.homeLoading())
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
