import React , { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

renderContent(){

	switch(this.props.auth){
		case null: 
		
		return ("Loading ...!!!")

		case false:
		
		return ("Logged Out")
		
		default:

		return ("logged In")

	}
}

	render() {
		console.log(this.props.auth);
		return (<div>{this.renderContent()} </div>);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);