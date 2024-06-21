import "./Home.css"
import blogs from "./../../data"
import BlogCard from "./../../components/BlogCard/BlogCard"

function Home() {
   
  return (
  <>
  <div className="blogs-container">
  {
   blogs.map((blogObject,i)=>{
    const {
        id,
        title,
        content,
        author,
        date,
        categories,
        comments,
    } = blogObject

    return (
   <BlogCard
   key={i}
   id={id}
   title={title}
   content={content}
   author={author}
   date={date}
   categories={categories}
   comments={comments}
   />)
   }) 
  }
  </div>
  
  </>
  )
}

export default Home
