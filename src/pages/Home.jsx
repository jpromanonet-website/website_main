import React from "react";
import "../css/Home.css";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import HomeData from "../data/HomeData";

function Home() {
    return (
        <>
            <section id="home">
                <div className="home container">
                    <div className="row">
                        <Fade left cascade>
                            <div className="col-lg-7 biodata">
                                <h1>{HomeData.tag_line_1}</h1>
                                <h2>{HomeData.tag_line_2}</h2>
                                <p>{HomeData.location}</p>
                                <span>
                                    <Link
                                        to="projects"
                                        smooth={true}
                                        offset={-50}
                                        duration={100}
                                        className="btn"
                                    >
                                        {HomeData.btn_1}
                                    </Link>
                                    <Link
                                        to="contact"
                                        smooth={true}
                                        offset={-50}
                                        duration={100}
                                        className="btn"
                                    >
                                        {HomeData.btn_2}
                                    </Link>
                                </span>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="col-lg-5 bioimg">
                                <img
                                    src={HomeData.img_src}
                                    alt={HomeData.img_alt}
                                    className="img-fluid"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
