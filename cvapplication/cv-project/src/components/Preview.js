import Placeholder from "./Placeholder";

export default function Preview() {
	return (
		<>
			<h1>Preview</h1>
			<Placeholder />
		</>
	);
}

function DisplayGeneral(props) {
	return (
		<>
			<h2>General</h2>
			<p>Name</p>
			<p>{props.name}</p>
			<p>{props.email}</p>
			<p>{props.phone}</p>
		</>
	);
}

export { DisplayGeneral };
