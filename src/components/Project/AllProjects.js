import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectList } from '../../helper/ProjectsData';
import './Project.css';

const AllProjects = () => {
	return (
		<div className="projects">
			<h1> My Personal Projects</h1>
			<div className="projectList">
				{ProjectList.map((project, index) => {
					return (
						<ProjectItem
							index={index}
							id={project.id}
							key={project.id}
							name={project.name}
							image={project.image}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AllProjects;
