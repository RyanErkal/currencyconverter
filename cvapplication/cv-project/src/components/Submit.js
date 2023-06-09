import Preview, { DisplayGeneral } from "./Preview";

export default function Submit() {
	return (
		<>
			<div className="submit">
				<button onClick={SubmitFrom}>Submit</button>
			</div>
		</>
	);
}

function SubmitFrom(e) {
	alert("Submitted");
	e.preventDefault();
	DisplayGeneral({ name: "name11", email: "email22", phone: "phone33" });
}
