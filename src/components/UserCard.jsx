import './Styles/UseCard.css'
const UserCard = ({ user, deleteUserByTd, setUpdateinfo,setFormClose }) => {
    const handleDelete = () => {
        deleteUserByTd(user.id);
    };

    const handleUpdate = () => {
        setUpdateinfo(user)
    }
    const handleOpenForm = ()=>{
        setFormClose(false)
      }

    return (
        <article className="user">
            <h2 className="user_name">{user.first_name} {user.last_name}</h2>
            <ul className="user_list">
                <li className="user_item"><span className="user_label">EMAIL:</span>{user.email}<span className="user_value"></span></li>
                <li className="user_item"><span className="user_label">BIRTHADY</span>{user.birthday}<span className="user_value"></span></li>
            </ul>
            <footer className="user_footer">
                <button className="user_btn user_delete" onClick={handleDelete}>
                    <i className='bx bx-trash user-icon'></i>
                    </button>
                <button className="user_btn user_update" onClick={() => {handleUpdate();  handleOpenForm();}} >
                    <i className='bx bx-edit-alt user-icon'></i>
                    </button>
            </footer>
        </article>
    )
}

export default UserCard