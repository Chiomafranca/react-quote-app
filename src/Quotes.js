import React, { useEffect, useState } from 'react'
import './App.css';


function Quotes() {
   const [quote, setQuote] = useState("")
   const [author, setAuthor] = useState("")

   useEffect(() =>{
      fetchQuote()
   }, [])

   const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author); 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className='quotes1'>
         <h1>Random Quote App</h1>
       <button onClick={fetchQuote}>Click here to fetch quote</button>
       {quote && (
          <div className='quotes2'>
             <h5>CONTENT: {quote}</h5>
             <h2>Author: {author}</h2>
          </div>
       )
          
       }
    </div>
  )
}
export default Quotes
