import React from 'react';

const Footer = (probb) => {
    console.log(probb)
    return (
        <>
            {probb.image ?
                    <section><img src={probb.image} alt='box'/></section> :
                    <section><h2>{probb.title}</h2> <p>{probb.text}</p></section>
            }
        </>
    );
};

export default Footer;