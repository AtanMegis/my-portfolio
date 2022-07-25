import React from 'react';
import './Home.css';
import ReactTyped from 'react-typed';

const Home = () => {
	return (
		<>
			<div className="home">
				<div className="about">
					<h2>
						Hi there,meet
						<ReactTyped
							className="typed"
							strings={['Christian Megis !']}
							typeSpeed={100}
							backSpeed={80}
							loop
						/>
					</h2>

					<div className="prompt">
						<p>
							A fiery student who has passion with Software
							Developer !
						</p>
					</div>
				</div>
				<div className="skills">
					<h1>Skills</h1>
					<ol className="list">
						<li className="item">
							<h2>Front End</h2>
							<span>
								Java, Javascript, React JS, Redux, NPM,
								Firebase, UI library, HTML5, CSS3,
								Tailwind CSS
							</span>
						</li>
						<li className="item">
							<h2>Other Skills</h2>
							<span>
								English, Problem Solving, Teamwork,
								Object-Oriented Programming, Clean
								Architecture
							</span>
						</li>
					</ol>
				</div>
			</div>
		</>
	);
};

export default Home;
