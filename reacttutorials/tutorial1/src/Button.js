import { useState } from "react";
import "./Button.css";

export default function Button() {
	const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}
