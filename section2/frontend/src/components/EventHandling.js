import React, { useState } from 'react'

const EventHandling = () => {
const [upvotes, setupvotes] = useState(0);
const [mycolor, setmycolor] = useState('#eee');
    let  likes = 0;
 const increaseLikes = () => {
    likes++;
    console.log(likes);
 }
const increaseUpvotes =() => {
    //upvotes++; ❌wrong
    setupvotes(upvotes + 1); //✅right
}

  return (
    <div style={{backgroundColor: mycolor , height: '100vh', padding: 50}}>
  <h1>Event Handling</h1>
  <hr/>
  <button className='btn btn-primary' onClick={ () => {alert('Knock Knock!! 😎😎')} } >Click Event Event Handling</button>
  <br/>
    <input type ="text" onChange={(e) => {console.log (e.target.value)}}/>
    <br/>
    <input type="color"onChange={(e) => {setmycolor(e.target.value)}}/>
    <br/>
   <button className='btn btn-danger mt-4' onClick={increaseLikes}>Add  a like</button>
   <h1>👍 {likes}</h1>

   <button className='btn btn-danger mt-4' onClick={increaseUpvotes}>Add  an upvotes</button>
   <h1>🔔🔔 {upvotes}</h1>
<input type="range" className="form-range" id="customRange1" onChange={(e) => {console.log(e.target.value);}}/>
   
    </div>
  )
}

export default EventHandling