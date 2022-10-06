import React from 'react';

function Description({name, job, other}) {
    return (
        <div className='description'>
            <h3>{name}</h3>
            <p>{job}</p>
            <p>{other}</p>
        </div>
    );
}

export default Description;