import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function UserForm() {
    return (
        <section className='userFormContainer'>
            <div className="FormLinkContainer">
                <NavLink className="formLink" to="/user/login">Login</NavLink>
                <NavLink className="formLink" to="/user/register">Register</NavLink>
            </div>


            <Outlet/>

        </section>
    )
}

export default UserForm
