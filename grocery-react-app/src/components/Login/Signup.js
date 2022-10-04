import React from 'react'
import './Login.css'
import { useState } from 'react'
import loading from '../../assets/loading.gif'

import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {

    const navigateTo = useNavigate()
    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function userNameHandler(e) {
        e.preventDefault()
        setUserName(e.target.value)
    }

    function passwordHandler(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    function cofirmPasswordHandler(e) {
        e.preventDefault()
        setConfirmPassword(e.target.value)
    }

    function signUpHandler(e) {
        e.preventDefault()
        let newUser = {
            userName: userName,
            password: password
        }

        if (userName.length > 6) {
            if (password.length > 4) {
                if (password === confirmPassword) {
                    setIsLoading(true)
                    fetch('https://632d52b4519d17fb53bb9bd0.mockapi.io/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    }).then(() => {
                        setError("")
                        setIsLoading(false)
                        navigateTo('/login')

                    })
                } else {
                    setError("Passwords Don't match")
                    setIsLoading(false)
                }
            } else {
                setError("Password require atleast 6 chars")
                setIsLoading(false)
            }
        } else {
            setError("User Name requires atleast 6 chars")
            setIsLoading(false)
        }


    }

    return (
        <div className='Login'>
            <div className='LoginWrapper'>
                {
                    <div className='LoginBox'>
                        {
                            isLoading ? <img src={loading} />

                                : <div className='LoginForm'>
                                    <h1>SIGN UP</h1>
                                    <form onSubmit={signUpHandler}>
                                        <input type='text' placeholder='user name' onChange={(e) => {
                                            userNameHandler(e)
                                        }} />
                                        <input type='text' placeholder='Password' onChange={(e) => {
                                            passwordHandler(e)
                                        }} />
                                        <input type='text' placeholder='Confirm Password' onChange={(e) => {
                                            cofirmPasswordHandler(e)
                                        }} />
                                        <input type='submit' value='Sign up' className='LoginBtn' />
                                    </form>
                                    <h4 className='error'>{error}</h4>
                                    <p>Already a member? <Link to='/login' className='loginLink'>Login</Link></p>
                                </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default SignUp;