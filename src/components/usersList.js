


function UsersList(p){

const users = p.userList
    
return (



  <ul className="px-1 lg:p-8 rounded-lg h-4/5  md:w-4/5 lg:w-11/12 bg-[rgba(250,250,255,0.1)] backdrop-blur-xl overflow-auto">
    {users.map(
      (user,index)=>{ return(        
      <li id={index} className="my-4 bg-[rgba(0,0,0,0.3)] py-1 px-3 rounded-md">
        <h1 className="capitalize"><strong>{user.personal.firstName} {user.personal.lastName}</strong> <em className="error-span">(D.N.I.: {user.personal.dni})</em></h1>
        <span className="flex flex-wrap"> <div>E-mail: {user.contact.email}.</div><div className=" mx-1">Phone: <em>{user.contact.phone}</em>.</div></span>
        <button className="bg-[#e22b82] px-2 rounded-lg shadow-md shadow-black  text-black hover:shadow-none active:shadow-none active:bg-[#eb6eaa]" id={index} onClick={()=>(p.deleteUser(index))}>Delete User</button>
      </li>)

      }
    )}
  </ul>







)
 
}

export default UsersList;