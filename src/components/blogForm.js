import { useState } from "react"

const BlogForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (myInput) => {
        myInput.preventDefault()

        const blog = { title, author, content }
        const response = await fetch('https://urbantxt-api.onrender.com/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        const json = await response.json()
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setContent('')
            setError(null)
            setEmptyFields([])
        } 
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)

        }

    }

    return ( 
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Blog!</h3>
                <label>Title:</label>
                <input 
                type="text" //limits 
                onChange={(myInput) => setTitle(myInput.target.value)} // e is input, uses input as value to submit
                value={title} // reflects on input
                className = {emptyFields.includes('title') ? 'error': ''}
                />
                <label>Author:</label>
                <input 
                    type="text" 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    className = {emptyFields.includes('author') ? 'error' : ''}
                />
                <label>Content:</label>
                <input 
                    type="text" 
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className = {emptyFields.includes('content') ? 'error' : ''}
                />
                <button>Add Blog</button>
                {error && <div className ="error">{error}</div>}
        </form>
     );
}
 
export default BlogForm;