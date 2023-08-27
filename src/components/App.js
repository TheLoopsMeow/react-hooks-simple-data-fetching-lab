// create your App component here
import React from 'react'
import {useState, useEffect } from 'react'

// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".

function App(){
    const [dogPic, setDogPic] = useState("")
    const [dogArray, setDogArray] = useState("")
    const [hasLoaded, setHasLoaded]= useState(false)


useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((r)=>r.json())
    .then((r)=>{
        
        setDogPic(r.message)
        
        console.log(dogPic)
        setHasLoaded(true)
    })
}, [])

if(!hasLoaded){
    return (
        <>
        <p>
            Loading...
        </p>
        </>
    )
}

else
{
return (
    <p>
        DOG
        <img src={dogPic} alt="doggie"></img>
    </p> 
)
        }
}



export default App;