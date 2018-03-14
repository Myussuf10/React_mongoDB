// SurveyForm for a user to add input

import React , { Component } from 'react';

import { reduxForm , Field } from 'redux-form';

import SurveyField from './SurveyField';


const FIELDS = [
				{label: 'Survey Title' , name:'title'},
				{label: 'Subject' , name:'subject'},
				{label: 'Email Body' , name:'body'},
				{label: 'Recpients List' , name:'emails'}
				];


class SurveyForm extends Component {

	renderFields(){

		return FIELDS.map(field => {
			return <Field key={field.name} label= {field.label} type="text" name={field.name} component={SurveyField}/>
			});
	}

	render(){
		return (<div>
			<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
			{this.renderFields()}
			<button type="submit">Submit</button>
			</form>

			</div>);
	}
}


export default reduxForm({
	form: 'surveyForm'


})(SurveyForm);