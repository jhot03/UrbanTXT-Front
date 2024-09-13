import { useEffect, useState } from "react";

// components
import BlogDetails from "../components/blogDetails";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {

        const getBlogs = async () => {
            try {
                const response = await fetch('/api/blogs') // need proxy for coors outside for in development 
                const jsonInfo = await response.json() // can use await because in async function 

                if (response.ok) { // no error json good 
                    setBlogs(jsonInfo)
                }
                if (!response.ok) {
                    console.log("Error could not retrieve, response not good", response)
                } 
            } catch (error) {
                console.log("error fetching", error)
            }
        }
        getBlogs()

    }, []) // empty dependcy list if something there updated then we re-render, could do this to instantiate blogs or re-run forms 




    return ( 
        <div className="home">
            <div className="blogs">     
            {blogs && blogs.map((blog) => (
                    < BlogDetails key = {blog._id} blog = {blog} blogs = {blogs} setBlogs = {setBlogs} />
                ))}
            </div>
        </div>
     );
}
 
export default Home