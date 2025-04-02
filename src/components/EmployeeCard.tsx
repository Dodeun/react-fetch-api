interface EmployeeCardProps {
	employee: {
		name: {
			first: string;
			last: string;
		};
		email: string;
		picture: {
			medium: string;
		};
	};
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
	const { name, email, picture } = employee;
	return (
		<figure className="DisplayEmployee">
			<img src={picture.medium} alt={name.first} />
			<figcaption>
				<strong>
					{name.first} {name.last}
				</strong>
				{email}
			</figcaption>
		</figure>
	);
};

export default EmployeeCard;

const peoples = {
	users: [
		{ user: "Bob", age: 40 },
		{ user: "Cindy", age: 32 },
		{ user: "Paul", age: 36 },
	],
	workers: [
		{ worker: "Antoine", age: 19 },
		{ worker: "Angela", age: 25 },
		{ worker: "Melanie", age: 23 },
	],
};

const updatedPeoples = {
	...peoples,
	workers: peoples.workers.map((workerItem) =>
		workerItem.worker === "Angela" ? { ...workerItem, age: 35 } : workerItem,
	),
};

console.log(updatedPeoples);
