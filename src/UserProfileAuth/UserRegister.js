import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function UserRegister() {
    const navigateTo = useNavigate();
    const [IsShowPass, setIsShowPass] = useState(false);
    const [Message, setMessage] = useState({ "IsNameMsgActive": false, "IsPhoneMsgActive": false, "IsEmailMsgActive": false, "IsPassMsgActive": false, "msgVal": "" });
    const [registrationMsg, setRegistrationMsg] = useState("");
    const [IsUserLoading, setIsUserLoading] = useState(false)

    const [userDetails, setUserDetails] = useState({
        "userName": "",
        "userPhone": "",
        "userEmail": "",
        "userPassword": "",
    });

    const handleOnChangeInput = (e) => {
        setMessage({ "IsNameMsgActive": false, "IsPhoneMsgActive": false, "IsEmailMsgActive": false, "IsPassMsgActive": false, "msgVal": "" });
        setUserDetails({
            ...userDetails, [e.target.name]: e.target.value
        });
    }

    const handleRegisterClick = (e) => {
        e.preventDefault();
        if (userDetails.userName.length === 0) {
            setMessage({ "IsNameMsgActive": true, "IsPhoneMsgActive": false, "IsEmailMsgActive": false, "IsPassMsgActive": false, "msgVal": "Name Can't Be Empty" });

        } else if (userDetails.userPhone.length === 0 || userDetails.userPhone.length < 10) {
            setMessage({ "IsNameMsgActive": false, "IsPhoneMsgActive": true, "IsEmailMsgActive": false, "IsPassMsgActive": false, "msgVal": "Provide Correct Phone Number" });

        } else if (userDetails.userEmail.length === 0) {
            setMessage({ "IsNameMsgActive": false, "IsPhoneMsgActive": false, "IsEmailMsgActive": true, "IsPassMsgActive": false, "msgVal": "Mail Can't Be Empty" });

        } else if (userDetails.userPassword.length === 0) {
            setMessage({ "IsNameMsgActive": false, "IsPhoneMsgActive": false, "IsEmailMsgActive": false, "IsPassMsgActive": true, "msgVal": "Password Can't Be Empty" });

        } else {
            setIsUserLoading(true);
            setRegistrationMsg("");
            axios.post("https://ecom-backend-t7c9.onrender.com/user/register", userDetails).then((response) => {
                setRegistrationMsg(response.data);
            });
        }
    }

    const handleClickShowPassword = (e) => {
        setIsShowPass(!IsShowPass);
    }

    return (
        <>
            {IsUserLoading && <div className='registrationResponseContainer'>
                <div className="responseContainer">
                    {
                        registrationMsg?.resMsg ? <div className='responsebox'>
                            <h2 className='registrationMsg'>{registrationMsg.resMsg}</h2>
                            <button className='responseContainerButton' onClick={() => navigateTo("/user/login")}>Go To Log In</button>
                        </div>
                            :
                            <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                                <circle id="c" fill="none" strokeWidth="4" strokeLinecap="round" stroke="white" cx="45" cy="45" r="43" />
                            </svg>

                    }

                </div>
            </div>}



            <div className="formBox registerFormBox">
                <h2 className='formBox--heading'>Get access to your Orders</h2>
                <form >
                    <div className="inputBox">
                        <input type="text" name='userName' id='userName' placeholder='Enter Your Name' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='userName' />
                        {Message.IsNameMsgActive && <p className='inputErrorMsg'>{Message.msgVal} </p>}
                    </div>

                    <div className="inputBox">
                        <input type="number" name='userPhone' id='userPhone' placeholder='Enter Your Phone' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='userPhone' />
                        {Message.IsPhoneMsgActive && <p className='inputErrorMsg'>{Message.msgVal} </p>}
                    </div>

                    <div className="inputBox">
                        <input type="email" name='userEmail' id='userEmail' placeholder='Enter Your Email' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='userEmail' />
                        {Message.IsEmailMsgActive && <p className='inputErrorMsg'>{Message.msgVal} </p>}
                    </div>

                    <div className="inputBox">
                        <input type={IsShowPass ? "text" : "password"} name='userPassword' id='userPassword' placeholder='Enter Your Password' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='current-password' />
                        <i className={`fa-regular ${IsShowPass ? "fa-eye-slash" : "fa-eye"} showPassBtnIcon`} onClick={handleClickShowPassword}></i>
                        {Message.IsPassMsgActive && <p className='inputErrorMsg'>{Message.msgVal} </p>}
                    </div>

                    <button className='formBox--Buttons' onClick={handleRegisterClick}>Register</button>
                </form>
                <div className="continueContainer">
                    <button className='navigateButton' onClick={() => navigateTo("/user/login")}>Already have an account? Sign in</button>
                </div>

            </div>
        </>
    )
}

export default UserRegister
