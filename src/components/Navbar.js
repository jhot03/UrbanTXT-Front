import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const currURL = useLocation().pathname

  const handleClick = (myInput, direction) => {
    if (direction === currURL) {
      window.location.reload()
    }
  }


  return (
    <header>
      <div className="container">
        <Link to="/"
          onClick={(e) => handleClick (e, "/")} 
        >
          <h1>Blog Application</h1>
        </Link>
        <Link to ="/"
          onClick={(e) => handleClick (e, "/")} 
        >
        <h3>View Blogs</h3>
        </Link>
        <Link to ="/add-blog"
          onClick={(e) => handleClick (e, "/add-blog")} 
        >
        <h4>+ Add Blog</h4>
        </Link>
      </div>
    </header>
  )
}

export default Navbar