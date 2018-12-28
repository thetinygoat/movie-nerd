import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Navbar from './components/Navigation/Navigation';
import Home from './containers/Home/Home';

class App extends Component {
	render() {
		return <Home />;
	}
}

const mapStateToProps = state => {
	return {
		home: state.home
	};
};

export default connect(mapStateToProps)(App);
