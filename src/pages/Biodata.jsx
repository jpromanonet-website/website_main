import React from "react";
import "../css/Biodata.css";
import Timeline from "../components/Timeline";
import { BioSkillsIcons } from "../components/BioDataCard";
import { BioDataHead, BioDataSkills } from "../data/BioData";

function Biodata() {
    return (
        <>
            <section id="biodata">
                <div className="biodata container">
                    <div className="biodata_head">
                        <span>{BioDataHead.bio_head_tag}</span>
                        <h1>{BioDataHead.bio_head_title}</h1>
                    </div>

                    <div className="biodata_timeline row">
                        <Timeline />
                    </div>

                    <div className="biodata_skills">
                        <h2>{BioDataHead.bio_skills_sub_head}</h2>
                        <div className="skills_wrapper">
                            {BioDataSkills.map((val) => {
                                return (
                                    <BioSkillsIcons
                                        key={val.id}
                                        icon={val.skills_icon}
                                        alt={val.skills_alt}
                                    />
                                );
                            })}
                        </div>
                        <button className="btn">
                            {BioDataHead.bio_btn_1_text}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Biodata;
