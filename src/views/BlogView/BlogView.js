import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "./../../data"

function BlogView() {
const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id === id) 
  return (
    <div>

     <h1>{selectedBlog.title}</h1> 
     <p>
        <img src={selectedBlog.author.avatar} alt="author" height={"100px"} />
        {selectedBlog.author.name}|{selectedBlog.date}
     </p>
     {selectedBlog.content}
     

    <div className="comment-section">
      <h3>Comments</h3>
      <input type="text" placeholder="Full Name..." class="btn-1"/>
      <input type="text" placeholder="Email Address..."  class="btn-2"/>
      <input type="text" placeholder="Type Your Comment..."  class="btn-3"/>  
      <button>Submit Comment</button> 
 </div>

    </div>
  )
}

export default BlogView
