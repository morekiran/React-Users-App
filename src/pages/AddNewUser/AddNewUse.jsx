import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "./addNewUser.module.css"

const AddNewUse = () => {
   
 const navigate = useNavigate();

  const handelSubmit = (e)=>{
    e.preventDefault();
    alert("New User Added Successfuly!")
    navigate("/") //redirect to home
  }

  return (
    <div className={styles.formContainer}>
        <h3>Add New User</h3>
        <form onSubmit={handelSubmit}>
         <input type="text" placeholder='Enter Your Full Name'required/>
         <input type="email" placeholder='Enter Your Email'required/>
         <input type="number" placeholder='Enter Your Contact Number'required/>
         <input type="submit" value="Create New User!"/>
         <Link to="/"> &lt;-Back To Home!</Link>
        </form>
    </div>
  )
}

export default AddNewUse