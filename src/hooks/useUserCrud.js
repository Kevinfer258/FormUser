import axios from "axios"
import {useState} from "react"


const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = `https://users-crud.academlo.tech/users/`

    //GET
    const getAllUsers = () =>{
        axios.get(url)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }

    //POST
    const createNewUser = data =>{
        axios.post(url, data)
        .then(() =>getAllUsers())
        .catch(err => console.log(err))
    }

    //DELETE
    const deleteUserByTd = id => {
        const urlDelete = `${url}${id}/`
        axios.delete(urlDelete)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateUsrId = (id,data) => {
        const urlupdate = `${url}${id}/`
        axios.patch(urlupdate, data)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }


    return {
        users,
        getAllUsers,
        createNewUser,
        deleteUserByTd, 
        updateUsrId
    }
}

export default useUserCrud