const keys = require('../../config/keys');

module.exports = (survey) => {

	return `
	<html>
		<body>

			<div>
				<h3>Survey Template</h3>
				<p>Please answer the following :</p>
				<p>${survey.body}</p>
				<div>
					<a href="${keys.redirectDomain}/api/surveys/feedback">Yes</a></div>
				</div>
				<div>
					<a href="${keys.redirectDomain}/api/surveys/feedback">No</a></div>
				</div>
		</body>
	</html>

	`;
};