import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
    const navigateTo = useNavigate();
    const [IsShowPass, setIsShowPass] = useState(false);
    const [Message, setMessage] = useState({ "IsPassMsgActive": false, "IsEmailMsgActive": false, "msgVal": "" });
    const [userDetails, setUserDetails] = useState({
        "userEmail": "",
        "userPassword": "",
    });
    const handleOnChangeInput = (e) => {
        setMessage({ "msgVal": "", "IsEmailMsgActive": false, "IsPassMsgActive": false })
        setUserDetails({
            ...userDetails, [e.target.name]: e.target.value
        });
    }
    const handleSingInClick = (e) => {
        e.preventDefault();
        if (userDetails.userEmail.length === 0) {
            setMessage({ "msgVal": "Enter Your Email", "IsEmailMsgActive": true, "IsPassMsgActive": false })
        } else if (userDetails.userPassword.length === 0) {
            setMessage({ "msgVal": "Password Can't be Empty.", "IsPassMsgActive": true, "IsEmailMsgActive": false })
        }
        console.log(userDetails);
    }
    const handleClickShowPassword = (e) => {
        setIsShowPass(!IsShowPass);
    }
    return (
        <div className="formBox">
            <h2 className='formBox--heading'>Get access to your Orders</h2>
            <form>
                <div className="inputBox">
                    <input type="email" name='userEmail' id='userEmail' placeholder='Enter Your Email' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='userEmail' />
                    {Message.IsEmailMsgActive && <p className='inputErrorMsg'>{Message.msgVal}<i className="fa-solid fa-triangle-exclamation"></i></p>}
                </div>

                <div className="inputBox">
                    <input type={IsShowPass ? "text" : "password"} name='userPassword' id='userPassword' placeholder='Enter Your Password' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='current-password' />
                    <i className={`fa-regular ${IsShowPass ? "fa-eye-slash" : "fa-eye"} showPassBtnIcon`} onClick={handleClickShowPassword}></i>
                    {Message.IsPassMsgActive && <p className='inputErrorMsg'>{Message.msgVal}<i className="fa-solid fa-triangle-exclamation"></i> </p>}
                </div>
                <button className='formBox--Buttons' onClick={handleSingInClick}>Sign In</button>
            </form>
            <div className="continueContainer">
                <button className='navigateButton' onClick={() => navigateTo("/user/register")}>New Here? Create an account</button>
            </div>
        </div>
    )
}
export default UserLogin
