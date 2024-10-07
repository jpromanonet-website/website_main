import React from "react";
import "../css/Projects.css";
import ProjectsCard from "../components/ProjectsCard";
import { ProjectsData, ProjectsCardData } from "../data/ProjectsData";

function Projects() {
    return (
        <>
            <section id="projects">
                <div className="projects container-fluid">
                    <div className="projects_head">
                        <span>{ProjectsData.projects_head_tag}</span>
                        <h1>{ProjectsData.projects_head_title}</h1>
                    </div>

                    <div className="projects_content">
                        {ProjectsCardData.map((val) => {
                            return (
                                <ProjectsCard
                                    key={val.id}
                                    src={val.project_img}
                                    alt={val.project_alt}
                                    icon={val.project_icon}
                                    title={val.project_title}
                                    link={val.project_link}
                                    bg={val.project_bg}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
