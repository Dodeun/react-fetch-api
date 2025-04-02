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
