import React from 'react';

function DisplaySimpson({ simpson }) {
    return (
        <div className="DisplaySimpson">
            <img
                src={simpson.image}
                alt={simpson.character}
            />
            <p>{simpson.character} :</p>
            <p>{simpson.quote}</p>
        </div>
    );
}

export default DisplaySimpson;