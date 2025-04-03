import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(
					data.results[Math.floor(Math.random() * data.results.length)],
				);
			});
	};

	return (
		<div className="App">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
