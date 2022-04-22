import { useNavigate } from "react-router-dom"
import { types } from "../../types/types"
import { useContext } from "react"
import { AuthContext } from "../../auth/AuthContext"


export const LoginScreen = () => {

const navigate = useNavigate()
const {dispatch} = useContext(AuthContext)

 const handleLogin = () => {
   const action = {
     type: types.login,
     payload:{name:'Gustavo'}
   }

 dispatch(action)

 const lastPath = localStorage.getItem('lastPath') || '/marvel';


  navigate(lastPath,{
    replace:true
  });

 } 
    return (
      <div className="container mt-5">
          <h1>Login</h1>
    
       <hr/>

        <button
        className="btn btn-primary"
        onClick={handleLogin}
        >
             login
             </button>   
          </div>
    )
  }