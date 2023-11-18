import React, { useState } from 'react';
import Project from '../components/project/Project';
import { projects } from './../helpers/projectsList';

const Projects = () => {
    const projectsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>

                {projects.length === 0 ? (
                    <p>No projects available.</p>
                ) : (
                    <div>
                        <ul className="projects">
                            {currentProjects.map((project, index) => (
                                <Project key={index} title={project.title} img={project.img} index={index + indexOfFirstProject} />
                            ))}
                        </ul>

                        <div className="pagination-container">
                            <div className="pagination">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index + 1}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                        onClick={() => handlePageClick(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Projects;
