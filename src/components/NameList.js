 import React from 'react'
 
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
   return (
     <div>
           {
               names.map(name => <h2>{name}</h2>)
           /* <h2>{names[0]}</h2>
           <h2>{names[1]}</h2>
           <h2>{names[2]}</h2> */}
           
           
     </div>
    )
    /*
    The map() function in React is used to iterate over an array and render a list of elements. It's a built-in JavaScript function that calls a provided function on each element in an array, in order, and constructs a new array from the results.

In your provided code, names.map(name => <h2>{name}</h2>) is using map() to create a new array of <h2> elements, one for each name in the names array. Each name is inserted into an <h2> tag.

This is a common pattern in React for rendering lists of data. However, when rendering lists, each element should have a unique key prop to help React identify which items have changed, are added, or are removed. This code doesn't include keys, so it would be better to write it as names.map((name, index) => <h2 key={index}>{name}</h2>)
    */
 }
 
 export default NameList
 