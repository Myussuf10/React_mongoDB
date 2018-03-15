// SuveyFOrmReview Reviews User inputs

import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions'

import formField from './formField'

const SurveyFormReview = ({onCancel , formValues , submitSurvey }) => {

const reviewFields = formField.map(({name , label}) => {

	return (<div key={name}>
			<label>{label}</label>
			<div>
			{formValues[name]}
			</div>
		</div>);
});
return (<div>
	<h3>Please Review your survey </h3>
	{reviewFields}

	<button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
	Back 
	</button>
	<button onClick={() => submitSurvey(formValues)} 
	className="green btn-flat right white-text">Send Survey
	<i className="material-icons right">email</i></button>
	</div>);

}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values

	};
}
export default connect(mapStateToProps, actions)(SurveyFormReview);