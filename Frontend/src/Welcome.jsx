
function Welcome ({user}) {
    console.log(user)
    return (
     <h1 style = {{color: "black"}}>
      Hello {user.username}!
     </h1>
    )
   }
   
   export default Welcome