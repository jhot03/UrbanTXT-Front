import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogDetails = ({ blog, setBlogs, blogs }) => {

    const handleDelete = async () => {
        const response = await fetch('/api/blogs/'+blog._id, {
            method: 'DELETE'
        })
        if (response.ok) {
            setBlogs(blogs.filter(b => b._id !== blog._id));
            console.log("blog deleted of id: ", blog._id)
        }
        if (!response.ok) {
            console.log("Error deleting blog")
        }
        
    }

    return ( 
        <div className="blog-details">
            <h4>{ blog.title }</h4>
            <p><strong>Author: </strong> {blog.author} </p>
            <p><strong>Content: </strong> {blog.content} </p>
            <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true})}</p>
            <span className = "material-symbols-outlined" onClick = {handleDelete}>delete</span>





        </div>
     );
}
 
export default BlogDetails