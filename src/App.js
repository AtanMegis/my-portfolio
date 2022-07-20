import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllProjects from './components/Project/AllProjects';
import Home from './pages/Home/Home';
import Experiences from './pages/Experiences/Experiences';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<AllProjects />} />
					<Route
						path="/projects/:id"
						element={<ProjectDisplay />}
					/>
					<Route path="/experiences" element={<Experiences />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
