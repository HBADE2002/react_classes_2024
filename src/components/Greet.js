import React from 'react';

const Greet = (props) => {
    //1. method const Greet = ({name, heroName})
    //2. method const Greet =(props) , const {name, heroName}=props
    // Destructuring props in the function parameter to name and heroName
    // console.log(name); // displays name in the console of the website
    // console.log(heroName)// {name: "Bruce", heroName: "Batman"}
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello, {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
    
}
export default Greet;