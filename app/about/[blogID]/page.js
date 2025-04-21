

export default async function Blog1({params}) {
  const {blogID} = await params;
  return <div>This  is blog 1 {blogID}</div>
  
}

