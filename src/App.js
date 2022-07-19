import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllProjects from './pages/AllProjects';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<AllProjects />} />
					<Route path="/experiences" element={<Experiences />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
