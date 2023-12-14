import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
        <Link to='/' className="mr-10">Home</Link>
        <Link to='/register' className="mr-10">Register</Link>
        <Link to='/login' >Login</Link>
    </nav>
  )
}

export default Navbar