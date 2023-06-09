import React, { Component } from "react";
import Dashboard from "./Dashboard";
import uniqid from "uniqid";

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: {
				text: "",
				id: uniqid(),
				priority: "",
			},
			tasks: [],
		};
	}

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
				priority: e.target.priority,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				text: "",
				id: uniqid(),
				priority: "",
			},
		});
	};

	render() {
		return <Dashboard />;
	}
}

export default App;
