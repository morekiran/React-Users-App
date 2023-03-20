import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "./editNewUser.module.css"

const EditNewUser = () => {
  
  const navigater =useNavigate();

  const submitHandler=(e)=>{
     e.preventDefault();
     alert("Update User Successfuly!")
     navigater("/")
  }
  return (
    <div className={styles.userForm}>
        <h3>Edit New User</h3>
        <form onSubmit={submitHandler}>
         <input type="text" placeholder='Kiran More'required/>
         <input type="email" placeholder='kiranmore@gmail.com'required/>
         <input type="number" placeholder='9467347832'required/>
         <input type="submit" value="Update User!"/>
         <Link to="/">&lt;-Back To Home!</Link>
        </form>
    </div>
  )
}

export default EditNewUser