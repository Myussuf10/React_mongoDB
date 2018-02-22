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
		return (
			  <nav>
    <div className = "nav-wrapper">
      <a href="#" className="brand-logo">FullStackReactJs</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
 		{this.renderContent()}
      </ul>
    </div>
  </nav>



			);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);