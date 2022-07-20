import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

const ProjectItem = ({ name, image, index }) => {
	const navigate = useNavigate();

	const showProjectHandler = () => {
		navigate('/projects/' + index);
	};
	return (
		<div className="projectItem" onClick={showProjectHandler}>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className="bgImage"
			/>
			<h1> {name} </h1>
		</div>
	);
};

export default ProjectItem;
