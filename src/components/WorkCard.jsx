import React from "react";

function WorkCard(props) {
    return (
        <>
            <div className="work_card col-sm-6 col-lg-4">
                <span>{props.icon}</span>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
        </>
    );
}

export default WorkCard;
