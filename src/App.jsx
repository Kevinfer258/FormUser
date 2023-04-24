import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateinfo, setUpdateinfo] = useState()
  const [FormClose, setFormClose] = useState(true)


 
  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserByTd, 
    updateUsrId
  } = useUserCrud()

  useEffect(() =>{
    getAllUsers()
  }, [])
   
  const handleOpenForm = ()=>{
    setFormClose(false)
  }

  return (
    
      <div className='App'>
        <header className='app_header'>
        <h1 className='app_title'>USERS</h1>
        <button onClick={handleOpenForm} className='app_btn'> <span className='app_max'> + </span> Create New User</button>
        </header>
        <FormUser
          createNewUser={createNewUser}
          updateinfo={updateinfo}
          updateUsrId={updateUsrId}
          setUpdateinfo={setUpdateinfo}
          setFormClose={setFormClose}
          FormClose={FormClose}
        />
        <div className='app_user-container'>
          {
            users?.map(user =>(
              <UserCard
              key={user.id}
              user={user}
              deleteUserByTd={deleteUserByTd}
              setUpdateinfo={setUpdateinfo}
              setFormClose={setFormClose}
               FormClose={FormClose}
              />
            ))
          }
        </div>
      </div>
        
  )
}

export default App
