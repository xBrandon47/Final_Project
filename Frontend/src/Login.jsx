import {useState} from "react"

function Login({setUser}) {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])

const handleSubmit = (e) => {
  e.preventDefault();
   fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username, 
        password 
      }),
    }).then((res) => {
      // clear errors
      console.log("***test")
      if (res.ok) {
          console.log("***response status", res.status)
          res.json()
          .then((user) => {
            console.log("***user: ", user)
            setUser(user)
            });
          // route to profile
        } else {
          console.log("***response status", res.status)
          res.json()
            .then((data) => {
              console.log("***errors: ", data.error)
              setErrors(data.error)
            });
        }
      })
    }
 return(
  <div>
    
    <form className = "loginForm" onSubmit={handleSubmit}>
    <h1 style = {{fontFamily: "cursive", color: "black"}} className = "login"> Login </h1>
    {errors && <p style = {{ color: "red"}}>{errors}</p>}
    <input
     className = "input"
     placeholder = "Enter Username"
     type = "text"
     id = "username"
     autoComplete = "off"
     value = {username}
     onChange = {(e) => setUserName(e.target.value)}
    />
    <input
    className = "input"
     placeholder = "Enter Password"
     type = "password"
     id = "password"
     value = {password}
     onChange = {(e) => setPassword(e.target.value)}
     />
     <button className = "loginBtn"
     type = "submit"> Submit </button>
   </form>
  </div>
 )
}

export default Login