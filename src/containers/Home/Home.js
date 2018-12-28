import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import * as homeAction from '../../store/actions/home';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Wrapper = styled.section`
	width: 80%;
	margin: 0 auto;
`;

class Home extends Component {
	componentDidMount() {
		this.props.homeLoading();
	}
	render() {
		let m = null;
		if (this.props.home.loading) {
			m = 'loading...';
		} else {
			m = this.props.home.movies.map((movie, key) => {
				return (
					<Grid item lg={2} sm={12} xs={12} key={key}>
						<MovieCard
							imgSrc={movie.backdrop_path}
							title={movie.title}
							rating={movie.vote_average}
						/>
					</Grid>
				);
			});
		}
		return (
			<Wrapper>
				<Grid container spacing={16}>
					{m}
				</Grid>
			</Wrapper>
		);
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
