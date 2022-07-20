import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../../helper/ProjectsData';
import './ProjectDisplay.css';
import { GitHub } from '@material-ui/icons';
import { Web } from '@mui/icons-material';
import { ArrowDownward } from '@mui/icons-material';

const ProjectDisplay = () => {
	const { id } = useParams();
	const project = ProjectList[id];

	return (
		<div className="project">
			<h1> {project.name}</h1>
			<img src={project.image} />
			<p>
				<b>Tools:</b> {project.tools}
			</p>
			<h3 style={{ color: '#3e487a' }}>Access Link Here !</h3>
			<ArrowDownward />
			<div className="open-in-new-tab">
				<a
					href={project.url}
					alt=""
					target="_blank"
					rel="noreferrer"
				>
					<Web />
				</a>
				<a
					href={project.repo}
					alt=""
					target="_blank"
					rel="noreferrer"
				>
					<GitHub />
				</a>
			</div>
		</div>
	);
};

export default ProjectDisplay;
