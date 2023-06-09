import "./App.css";
import Navbar from "./components/Navbar";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Submit from "./components/Submit";
import Preview from "./components/Preview";

function App() {
	return (
		<>
			<Navbar />
			<form>
				<General />
				<Education />
				<Experience />
				<Skills />
				<Submit />
			</form>
			<Preview />
		</>
	);
}

export default App;
