export default function General() {
	return (
		<>
			<div className="general">
				<h2>General</h2>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="phone">Phone</label>
				<input type="tel" id="phone" name="phone" />
			</div>
		</>
	);
}
