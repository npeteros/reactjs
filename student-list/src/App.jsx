import { useState } from 'react';

const Students = [
	{
		id: 13100270,
		name: "Patrick",
		age: 27,
		course: "BS-CpE",
	},
	{
		id: 13100271,
		name: "Ean",
		age: 26,
		course: "BS-IT",
	},
	{
		id: 1100389,
		name: "Gran",
		age: 29,
		course: "BS-CS",
	},
	{
		id: 16103790,
		name: "John",
		age: 25,
		course: "BS-ChE",
	},
	{
		id: 18100392,
		name: "Josh",
		age: 23,
		course: "BS-IS",
	},
	{
		id: 22103454,
		name: "Neal",
		age: 20,
		course: "BS-IT",
	}
];

const App = () => {
    const [search, setSearch] = useState("");
	const [filteredStudents, setFilteredStudents] = useState([]);

	const handleSearchChange = (e) => {
		if (e.target.value >= 0) {
			setSearch(e.target.value);
			setFilteredStudents(Students.filter((x) => (x.id).toString().includes(e.target.value)));
		}

	}
	
	return (
		<>
			<label htmlFor="idNum">Input Student ID #: </label>
			<input type="number" name="idNumber" id="idNumber" onChange={handleSearchChange} />
			<div style={{ display: "flex" }}>
				{
					search ?
						filteredStudents.map((x) => (
							<div key={x.id} style={{ border: "2px solid black", margin: "10px", width: "fit-content", padding: "10px" }}>
								<p><b>ID:</b> {x.id}</p>
								<p><b>Name:</b> {x.name}</p>
								<p><b>Age:</b> {x.age}</p>
								<p><b>Course:</b> {x.course}</p>
							</div>
						))

						:
						Students.map((stud) => (
							<div key={stud.id} style={{ border: "2px solid black", margin: "10px", width: "fit-content", padding: "10px" }}>
								<p><b>ID:</b> {stud.id}</p>
								<p><b>Name:</b> {stud.name}</p>
								<p><b>Age:</b> {stud.age}</p>
								<p><b>Course:</b> {stud.course}</p>
							</div>
						))
				}
			</div>
		</>
	)
}

export default App