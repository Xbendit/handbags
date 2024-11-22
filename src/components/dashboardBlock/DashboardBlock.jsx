import React from 'react';

const DashboardBlock = (propa) => {
    console.log(propa)
    return (
            <article>
                <span>{propa.span}</span>
                <img src={propa.image} alt="Product"/>
                <p>{propa.text}</p>
                <h4>{propa.price}</h4>
            </article>
    );
};

export default DashboardBlock;