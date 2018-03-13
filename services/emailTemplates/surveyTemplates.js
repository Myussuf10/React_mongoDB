module.exports = (survey) => {

	return `
	<html>
		<body>

			<div>
				<h3>Survey Template</h3>
				<p>Please answer the following :</p>
				<p>${survey.body}</p>
				<div>
					<a href="http://localhost:3000">Yes</a></div>
				</div>
				<div>
					<a href="http://localhost:3000">No</a></div>
				</div>
		</body>
	</html>

	`;
};