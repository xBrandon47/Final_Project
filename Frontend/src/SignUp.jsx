import {useState} from "react"

function SignUp({ setUser }) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
        }),
      
    }).then((res) => {
      // clear errors
      // console.log("***test")
      if (res.ok) {
          console.log("***response status", res.status)
          res.json()
          .then((user) => {
            console.log("***user: ", user)
            setUser(user)
            });
          // route to profile
        } else {
          // console.log("***response status", res.status)
          res.json()
            .then((data) => {
              // console.log("***errors: ", data.errors)
              setErrors(data.errors)
            });
        }
      })
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className = "signUpForm">
        <h1 style = {{fontFamily: "cursive", color: "black"}}>Sign Up</h1>
        <ul style = {{listStyle: "none", color: "red"}}>
        {errors.map((error =>
        <li >{error}</li>
        ))
      }
      </ul>
          <input
          className = "input"
          placeholder="Email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          className = "input"
          placeholder="Enter Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className = "input"
          placeholder="Enter Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input
          className = "input"
          placeholder="Re-enter Password"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button className="signUpBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;