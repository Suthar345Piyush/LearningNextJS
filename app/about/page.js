import Link from 'next/link';
import React from 'react'

export const metadata = {
   title : "About | Technical Agency",
}




function aboutPage() {
  return (
     <>
      <h1> This is  about page</h1>
      <Link href="/services">Go to Services Page</Link>
      
     </>
  )
}

export default aboutPage;

