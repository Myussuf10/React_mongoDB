import React, { Component } from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css'
import * as actions from '../actions';

import Header from './Header';


const Landing = () => <div>Landing!!</div>;
const Dashboard = () => <div>Dashboard !!!!</div>;
const SurveyNew = () => <div>SurveyNew !!!</div>;

class App extends Component {


	componentDidMount() {
		this.props.fetchUser();
	}

	render () {

		return (

				<div>
		<BrowserRouter>
		<div>
		<Header /> 
		<Route exact path="/" component={Landing}/>
		<Route exact path="/surveys" component={Dashboard}/>
		<Route path="/surveys/new" component={SurveyNew}/>
		</div>
		</BrowserRouter>
		</div>

		)
	}
}




export default connect(null, actions)(App);
