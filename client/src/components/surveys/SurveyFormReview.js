// SuveyFOrmReview Reviews User inputs

import React from 'react';

import { connect } from 'react-redux';

import formField from './formField'

const SurveyFormReview = ({onCancel , formValues }) => {

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
	</div>);

}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values

	};
}
export default connect(mapStateToProps)(SurveyFormReview);