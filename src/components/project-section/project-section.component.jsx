import React from 'react';

import './project-section.styles.scss';

import ProjectData from './project-section.data';
import Project from '../project/project.component';

const ProjectSection = () => {
    return (
        <div className="project-section" id="work">
            <h2 className="project-section__heading">Projects I've Built</h2>
            {
                ProjectData.map(project => <Project key={project.id} project={project} />)
            }
        </div>
    )
};

export default ProjectSection;