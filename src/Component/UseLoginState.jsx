import React ,{ useState }from 'react'
function UseLoginState() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const LoginClick = () => setIsLoggedIn(true);
   const LogoutClick=()=> setIsLoggedIn(false);
    return (
    <div className="user">
      {isLoggedIn ? <h2>Welcome User!</h2>: <h2>Please Login</h2>}
        {isLoggedIn ? (
            <button onClick={LogoutClick}>
                Logout
            </button>
        ):(
            <button onClick ={LoginClick}>Login</button>
        )}
    </div>
  )
}

export default UseLoginState
