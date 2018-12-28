import React from 'react';

const Card = ({
    name,
    email,
    id
}) => {
    return ( <
        div className = 'tc grow bg-light-blue br2 pa2 ma4 dib bw6 shadow-7' >
        <
        img alt = 'robots'
        src = {
            `https://robohash.org/${id}?200x200`
        }
        /> <
        div >
        <
        h2 > {
            name
        } < /h2> <
        p > {
            email
        } < /p> <
        /div> <
        /div>
    );
}

export default Card;
