import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const Dashboard = () => {
    const {user} = useContext(UserContext)
    return (
        
        <div className="flex justify-center items-center flex-col">
            <h1 className="mt-6">Dashboard</h1>
            
            {!!user && (<h2>Hi {user.name}!</h2>)}
            <p className="mt-8">Monday</p>
            <img className='h-72 mx-16 ' src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg" alt="" />
        </div>
  )
}

export default Dashboard