import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return <div>{this.props.ctr}</div>;
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.r.counter
	};
};

export default connect(mapStateToProps)(App);
