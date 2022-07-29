import useLocalStorage  from "./hooks/useLocalStorage";
import Form from "./components/form";
import UsersList from "./components/usersList";
import { useState } from "react";
import "./index.css" 
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';


function App() {

const [users, setUsers] = useLocalStorage("userlist",[])
const [logEror, setLogError] = useState (false)


  function addUser (user) {
    const isANewUser = users.findIndex((alreadyUser)=>{  
      return(user.personal.dni === alreadyUser.personal.dni)
    })

    if (isANewUser>-1){
      setLogError(true)
      console.log(users)
    } else if (isANewUser === -1){
      setUsers((prevValue) => {return [...prevValue, user] })
      console.log(users)
    }  
  }

  const deleteItemFromList = (id)=>{
    setUsers(
      users.filter((item,index) =>{
           return (index != id)
         })
    )
  } 
    

return (

<div className="h-screen w-screen flex items-center justify-center  bg-gradient-to-r from-black to-slate-800 flex-col">


  <Router>
  <nav className="flex space-x-16 mt-2 mb-8 list-none text-black ">
      <NavLink exact to="/" className={({isActive})=>(isActive?"bg-[rgba(250,250,255,0.1)] px-4 rounded-lg font-semibold text-white":"bg-[rgba(250,250,255,0.1)] px-4 rounded-lg font-semibold text-white shadow-md shadow-black  hover:shadow-none")}>
        Form
      </NavLink>
      <NavLink exact to="/users" className={({isActive})=>(isActive?"bg-[rgba(250,250,255,0.1)] px-4 rounded-lg font-semibold text-white":"bg-[rgba(250,250,255,0.1)] px-4 rounded-lg font-semibold text-white shadow-md shadow-black  hover:shadow-none")}>
        Users
      </NavLink>
    </nav>
    <Routes>
        <Route exact path='/' element={<Form submitUser={addUser}/>}></Route>
        <Route exact path="/users" element={<UsersList userList={users} deleteUser={deleteItemFromList}/>}></Route>
    </Routes>
  </Router>

</div>

)
 
}

export default App;
