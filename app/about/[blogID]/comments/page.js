

async function commentsPage({params}) {
  const {blogID} = await params;
  return  <div>Comments 1 {blogID}</div>
  
}

export default commentsPage
