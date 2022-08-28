import React from "react";


function Links(prop) {
    console.log(prop.github)
    return(
    <div>
        <h3>Links
            <a href={prop.github}>{prop.github}</a>
            <a href={prop.linkedin}>{prop.linkedin}</a>
        </h3>
    </div>
        )
}

export default Links