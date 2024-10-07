import React from "react";
import "../css/Work.css";
import Fade from "react-reveal/Fade";
import WorkCard from "../components/WorkCard";
import { WorkData, WorkCardData } from "../data/WorkData";

function Work() {
    return (
        <>
            <section id="work">
                <div className="work container">
                    <Fade bottom cascade>
                        <div className="work_head">
                            <span>{WorkData.work_head_tag}</span>
                            <h1>{WorkData.work_head_title}</h1>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="work_content row">
                            {WorkCardData.map((val) => {
                                return (
                                    <WorkCard
                                        key={val.id}
                                        icon={val.work_icon}
                                        name={val.work_name}
                                        desc={val.work_desc}
                                    />
                                );
                            })}
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    );
}

export default Work;
