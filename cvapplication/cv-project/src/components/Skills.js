export default function Skills() {
	return (
		<>
			<div className="skills">
				<h2>Skills</h2>
				<label htmlFor="skill">Skill</label>
				<input type="text" id="skill" name="skill" />
				<label htmlFor="level">Level</label>
				<select id="level" name="level">
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>
			</div>
		</>
	);
}
