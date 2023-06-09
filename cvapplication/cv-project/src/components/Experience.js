export default function Experience() {
	return (
		<>
			<div className="experience">
				<h2>Experience</h2>
				<label htmlFor="company">Company</label>
				<input type="text" id="company" name="company" />
				<label htmlFor="position">Position</label>
				<input type="text" id="position" name="position" />
				<label htmlFor="main-tasks">Main Tasks</label>
				<textarea id="main-tasks" name="main-tasks" />
				<label htmlFor="start-date">Start Date</label>
				<input type="date" id="start-date" name="start-date" />
				<label htmlFor="end-date">End Date</label>
				<input type="date" id="end-date" name="end-date" />
			</div>
		</>
	);
}
