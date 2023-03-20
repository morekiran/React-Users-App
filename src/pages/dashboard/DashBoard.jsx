import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./dashBoard.module.css"

const DashBoard = () => {

    const tabelData = [
        {
            fullName: 'Kiran More',
            email: "kiranmore@gmail.com",
            contactNo: 9467347832,
        },
        {
            fullName: 'Shree Gore',
            email: "shreegore@gmail.com",
            contactNo: 3757343334,
        },
        {
            fullName: 'Sahil Khan',
            email: "sahilkhan@gmail.com",
            contactNo: 9457123342,
        },
        {
            fullName: 'Ankita Mule',
            email: "ankitamule@gmail.com",
            contactNo: 7643334534,
        },
        {
            fullName: 'Sakshi Satav',
            email: "sakshisatav@gmail.com",
            contactNo: 9457343342,
        },

    ]
    return (
        <div className={styles.dashboard}>
            <div className={styles.CTARow}>
                <input type="search" placeholder='Enter Your Text..!' />
                <Link to="/addNewUser" className={styles.addNewUserBUtn}>Add New User!</Link>
            </div>
            <table border={1} style={{borderCollapse:"collapse"}}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Sr No.</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Contact No.</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
        {tabelData.map((user, index) => {
            return (
             <tr>
             <td>{index+1}</td>
             <td>{user.fullName}</td>
             <td>{user.email}</td>
             <td>{user.contactNo}</td>
             <td><Link to="/editNewUser" id={styles.editbtn}>Edit</Link></td>
             <td><button id={styles.deletebtn}>Delete</button></td>
             </tr>
                  )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DashBoard