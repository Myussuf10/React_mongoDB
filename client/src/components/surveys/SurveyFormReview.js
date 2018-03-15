// SuveyFOrmReview Reviews User inputs

import React from 'react';

const SurveyFormReview = ({onCancel}) => {

return (<div>
	<h3>Please Review your survey </h3>

	<button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
	Back 
	</button>
	</div>);

}

export default SurveyFormReview;