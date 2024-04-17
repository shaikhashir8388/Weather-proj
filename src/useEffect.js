import React, { useEffect, useState } from "react";
import "./style.css";


const UseEffect = () => {

//  const initialData = 10;
 const  [mynum, setMynum ] =   useState(0)
    
 useEffect(() => {
   document.title = `Chats(${mynum})`;
 },);
 
    
    return (
   <>

   <div className="centerdiv">
    <p>{mynum}</p>``
    <div className="button2" onClick={() => setMynum(mynum + 1) } >
        <span></span>
        <span></span>
        <span></span >
        <span></span>
        INCR
    </div>
     
   </div>
   
   
   </>

);
};
export default UseEffect;