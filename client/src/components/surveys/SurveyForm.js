// SurveyForm for a user to add input

import React , { Component } from 'react';

import { reduxForm , Field } from 'redux-form';

import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

import validateEmails from '../../utils/validateEmails'

import formFields from './formField';

class SurveyForm extends Component {

	renderFields(){

		return formFields.map(field => {
			return <Field key={field.name} label= {field.label} type="text" name={field.name} component={SurveyField}/>
			});
	}

	render(){
		return (<div>
			<form onSubmit={this.props.handleSubmit(this.props.onSubmitSurvey)}>
			{this.renderFields()}
			<Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
			<button type="submit" className="teal btn-flat right white-text">Next

			<i className="material-icons right">done</i>
			</button>
			</form>

			</div>);
	}
}

function validate(values) {

const errors = {};

errors.recipients  = validateEmails(values.recipients || '');

	formFields.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = `You must Provide value for ${name}`
		}
	});

return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false


})(SurveyForm);