import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import Todo from "./Pages/Todo";
import StudentList from "./Pages/StudentList";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<header>
					<nav>
						<Link to="/" style={{marginRight: 20}}>Home Page</Link>
						<Link to="/todo-list" style={{marginRight: 20}}>To Do List</Link>
						<Link to="/student-list" style={{marginRight: 20}}>Student List</Link>
					</nav>
				</header>
				<Routes>
					<Route index element={<Index />} />
					<Route path="/todo-list" element={<Todo />} />
					<Route path="/student-list" element={<StudentList />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
