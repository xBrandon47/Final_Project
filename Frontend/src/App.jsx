import { useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import '../css/App.css'
// import '../css/SignUp.css'
// import '../css/NavBar.css'
import Login from './Login'
import SignUp from './SignUp'
import Welcome from './Welcome'

function App() {
  const [user, setUser] = useState(null);
  function handleLogoutClick() {

  fetch("/api/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      setUser(null);
    }
    });
  }
  
  
  return (
    <div className = "App">
     <nav className = "navBar">
      {user ? (
        <>
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/" onClick={handleLogoutClick}>  Log Out  </Link></li>
        <Welcome user = {user}/>
        </>
      ) : (
      <>
      <ul>
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/signup"> Sign Up </Link></li>
        <li><Link to = "/login"> Log In </Link></li>
      </ul>
      <Routes>
      <Route 
        path = "/signup" 
        element = {<SignUp setUser = {setUser} />} 
      />
      <Route 
        path = "/login" 
        element = {<Login setUser = {setUser}/>} />
      </Routes>
      </>
      )
      }
      </nav>
    </div>
  )
}

export default App
