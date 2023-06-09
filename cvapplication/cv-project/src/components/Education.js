export default function Education() {
	return (
		<>
			<div className="education">
				<h2>Education</h2>
				<label htmlFor="school">School</label>
				<input type="text" id="school" name="school" />
				<label htmlFor="degree">Degree</label>
				<input type="text" id="degree" name="degree" />
				<label htmlFor="subject">Subject</label>
				<input type="text" id="subject" name="subject" />
				<label htmlFor="start-date">Start Date</label>
				<input type="date" id="start-date" name="start-date" />
				<label htmlFor="end-date">End Date</label>
				<input type="date" id="end-date" name="end-date" />
			</div>
		</>
	);
}
