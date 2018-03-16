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
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></div>
				</div>
				<div>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></div>
				</div>
		</body>
	</html>

	`;
};