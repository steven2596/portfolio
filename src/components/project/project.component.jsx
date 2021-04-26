import React from 'react';

import './project.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Project = ({ project }) => {
    const { id, title, description, tech, image, url, repo } = project;

    let reverse = '';
    if (id % 2 !== 0) {
        reverse = 'grid-reverse';
    } else {
        reverse = '';
    }

    return (
        <div className="project" >
            <div className={`project__img-container ${reverse ? 'reverse-img' : ''}`}>
                <img src={image} alt="project-img" className="project__img" />
            </div>

            <div className={`project__content ${reverse ? 'reverse-content' : ''}`}>
                <span className="project__text">Featured Project</span>
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>
                <ul className="project__tech-list">
                    {
                        tech.map(skill => <li className="project__tech-item">{skill}</li>)
                    }
                </ul>
                <div className="project__links" >
                    <a href={url} >
                        <CustomButton small >Live Website</CustomButton>
                    </a>
                    <a href={repo}>
                        <CustomButton small >Git Repo</CustomButton>
                    </a>
                </div>
            </div>

        </div>
    )
};

export default Project;