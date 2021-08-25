import React from "react";


const EventDeligation = () => {
    const handleClick = (event) => {
       console.log("parent clicked")
    }
    
    function curry(func) {
        return function curried(...args) {
            if(args.length >= func.length){
                return func.apply(this, args)
            } else {
                return function(...args2){
                   return curried.apply(this, args.concat(args2))
                }
            }
        };
    }

    return(
        <div>
           <ul id="category" onClick={() => handleClick()}>
               <li id="laptops">
                   LAPTOP
               </li>
               <li id="camera">
                   CAMERA
               </li>
               <li id="mobile">
                   MOBILE
               </li>
           </ul>
        </div>
    )
}