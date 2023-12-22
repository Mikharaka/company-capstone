import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="bg-main py-2 ">
        <Link to='/' className="mr-10 font-bold text-white text-sm">Home</Link>
        <Link to='/register' className="mr-10 font-bold text-white text-sm">Register</Link>
        <Link to='/login' className="font-bold text-white text-sm">Login</Link>
      </nav>

    </div>
  )
}

export default Navbar