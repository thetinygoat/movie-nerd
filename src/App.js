import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navigation/Navigation';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.r.counter
	};
};

export default connect(mapStateToProps)(App);
