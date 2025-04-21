import Link from 'next/link'
import React from 'react'

 async function   Services ({params , searchParams}) {
      console.log( await searchParams);
      console.log(await params);
  return (
     <>
      <h1>
        This is services Page
      </h1>
      <p> 
        <Link href="/about"> Go to about page </Link>
      </p>
     
      <p> 
        <Link href="/services/app-dev"> Go to App dev page </Link>
      </p>

      <p> 
        <Link href="/services/web-dev"> Go to web dev page</Link>
      </p>

      <p> 
        <Link href="/services/game-dev"> Go to game dev page</Link>
      </p>

      <p> 
        <Link href="/services/iot"> Go to iot dev page</Link>
      </p>

     </>
  )
}

export default   Services
