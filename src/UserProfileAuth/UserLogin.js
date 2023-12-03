import React, { createRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addUser } from '../Slice/UserSlice';
function UserLogin() {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const [loginMsg, setloginMsg] = useState("");
    const [IsUserLoading, setIsUserLoading] = useState(false)
    const [IsShowPass, setIsShowPass] = useState(false);
    const [Message, setMessage] = useState({ "IsPassMsgActive": false, "IsEmailMsgActive": false, "msgVal": "" });
    const userEmailInputRef = createRef();
    const userPasswordInputRef = createRef();
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
            userEmailInputRef.current.focus();
        } else if (userDetails.userPassword.length === 0) {
            setMessage({ "msgVal": "Password Can't be Empty.", "IsPassMsgActive": true, "IsEmailMsgActive": false })
            userPasswordInputRef.current.focus();
        } else {
            setIsUserLoading(true);
            setloginMsg("");
            axios.post("https://ecom-backend-t7c9.onrender.com/user/login", userDetails).then((response) => {
                setloginMsg(response.data);
                if (response.data.resMsg === "User Logged In Successfully") {
                    dispatch(addUser(response.data.UserDetails));
                    localStorage.setItem(`token`, `${response.data.Your_TOKEN}` );
                }
            })
        }
    }

    // when res.msg is "Password is in Correct"
    const handlePasswordTryAgainClick = (e) => {
        setIsUserLoading(false);
        userPasswordInputRef.current.focus();
        userPasswordInputRef.current.value = "";

    }
    // when res.msg is "Email is not correct or registred"
    const handleEmailTryAgainClick = (e) => {
        setUserDetails({
            "userEmail": "",
            "userPassword": "",
        });
        setIsUserLoading(false);
        userEmailInputRef.current.focus();
        userEmailInputRef.current.value = "";
        userPasswordInputRef.current.value = "";

    }

    const handleClickShowPassword = (e) => {
        setIsShowPass(!IsShowPass);
    }
    return (
        <>
            {IsUserLoading && <div className='registrationResponseContainer'>
                <div className="responseContainer">
                    {
                        loginMsg?.resMsg ? <div className='responsebox'>
                            <h2 className='loginMsg'>{loginMsg.resMsg}</h2>
                            {
                                loginMsg.resMsg === "Password is not Correct" && <button onClick={handlePasswordTryAgainClick} className='responseContainerButton'>Try Again</button>
                            }

                            {
                                loginMsg.resMsg === "User Not Registred or Email Is Not Correct" && <>
                                    <button onClick={() => navigateTo("/user/register")} className='responseContainerButton'>Sign Up</button>
                                    <button onClick={handleEmailTryAgainClick} className='responseContainerButton'>Try Again</button>
                                </>
                            }

                            {
                                loginMsg.resMsg === "User Logged In Successfully" && <button onClick={() => navigateTo("/")} className='responseContainerButton'>Go To Home</button>
                            }

                        </div>
                            :
                            <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                                <circle id="c" fill="none" strokeWidth="4" strokeLinecap="round" stroke="white" cx="45" cy="45" r="43" />
                            </svg>

                    }

                </div>
            </div>}
            <div className="formBox">
                <h2 className='formBox--heading'>Get access to your Orders</h2>
                <form>
                    <div className="inputBox">
                        <input type="email" name='userEmail' id='userEmail' placeholder='Enter Your Email' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='userEmail' ref={userEmailInputRef} />

                        {Message.IsEmailMsgActive && <p className='inputErrorMsg'>{Message.msgVal}<i className="fa-solid fa-triangle-exclamation"></i></p>}
                    </div>

                    <div className="inputBox">
                        <input type={IsShowPass ? "text" : "password"} name='userPassword' id='userPassword' placeholder='Enter Your Password' className='inputFilelds' onChange={handleOnChangeInput} autoComplete='current-password' ref={userPasswordInputRef} />

                        <i className={`fa-regular ${IsShowPass ? "fa-eye-slash" : "fa-eye"} showPassBtnIcon`} onClick={handleClickShowPassword}></i>
                        {Message.IsPassMsgActive && <p className='inputErrorMsg'>{Message.msgVal}<i className="fa-solid fa-triangle-exclamation"></i> </p>}
                    </div>
                    <button className='formBox--Buttons' onClick={handleSingInClick}>Sign In</button>
                </form>
                <div className="continueContainer">
                    <button className='navigateButton' onClick={() => navigateTo("/user/register")}>New Here? Create an account</button>
                </div>
            </div>
        </>
    )
}
export default UserLogin
