import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
const Experiences = () => {
	return (
		<>
			<div className="experiences">
				<VerticalTimeline lineColor="#3e487a">
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2019 - present "
						iconStyle={{
							background: '#3e487a',
							color: '#fff',
						}}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Bina Sarana Informatika University
						</h3>
						<p>Informatics Engineering</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="25 Jul - 23 Dec 2022 "
						iconStyle={{
							background: '#e9d35b',
							color: '#fff',
						}}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							IT Vertical & Commercial Support
						</h3>
						<p>Liputan6.com</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="28th Feb - 29 Jul 2022"
						iconStyle={{
							background: '#3e487a',
							color: '#fff',
						}}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Front End Studi Independen Generasi Gigih 2.0
							by YABB & GoTo
						</h3>
						<p>Software Course</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2015 - 2018"
						iconStyle={{
							background: '#3e487a',
							color: '#fff',
						}}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">
							Mardi Waluya
						</h3>
						<p>High School Diploma</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</>
	);
};

export default Experiences;
