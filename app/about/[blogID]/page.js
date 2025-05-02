import { notFound } from "next/navigation";


export default async function Blog1({params}) {
  const {blogID} = await params;
  
  if(!/^\d+$/.test(blogID)){
    notFound();
  }


  return <div>This  is blog 1 {blogID}</div>
  
}


