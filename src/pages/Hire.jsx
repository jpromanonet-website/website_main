import React from "react";
import "../css/Hire.css";

function Hire() {
    const hireBg = {
        backgroundImage: "url(assets/hire_bg.jpg)",
    };

    return (
        <>
            <section id="hire" style={hireBg}>
                <div className="hire">
                    <h2>Interested in working with me?</h2>
                    <button className="btn">Hire Me!</button>
                </div>
            </section>
        </>
    );
}

export default Hire;
