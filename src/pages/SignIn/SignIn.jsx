import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import facebook from '../../../public/Facebook.svg'
import google from '../../../public/google.svg'
import { InputText } from "primereact/inputtext";
import '../SignUp/index.scss'

function SignIn() {
   
    const [token, setToken] = useState()

    useEffect(()=>{
        
    },[])

    return (
        <div className='signUp'>
            <div className="signUp__wrapper">
                <h2 className='signUp__title'>Sign in</h2>
                <div className="signUp__wrapper-scioal">
                    <a className='signUp__wrapper-link' href="#"><img src={google} alt="google icon" /> Continue with Google</a>
                    <a className='signUp__wrapper-link' href="#"><img src={facebook} alt="facebook icon" />Continue with Google</a>
                </div>
                <div className="signUp__or">
                    <span className='signUp__or-sp'></span>
                    <p className='signUp__or-text'>OR</p>
                    <span className='signUp__or-sp'></span>
                </div>
                <form className='signUp__form' method="post" action="/">
                    <div className="signUp__form-inner">
                        <label htmlFor="username">Your username</label>
                        <InputText id="username" aria-describedby="username-help" placeholder='Enter your username' />
                    </div>
                    <div className="signUp__form-inner">
                        <label htmlFor="name">Your name</label>
                        <InputText id="name" aria-describedby="name-help" placeholder='Enter your name' />
                    </div>
                    <div className="signUp__form-inner">
                        <label htmlFor="email">Your email</label>
                        <InputText id="email" aria-describedby="email-help" placeholder='Enter your email' />
                    </div>
                    <div className="signUp__form-inner">
                        <label htmlFor="username">Your username</label>
                        <InputText id="username" aria-describedby="username-help" placeholder='Enter your username' />
                    </div>
                </form>
                <button type="submit" className='signUp__btn btn-blue' style={{ width: '100%', height: '40px' }}>Button</button>
                <p className='signUp__link-text'>Already signed up? <Link className='signUp__link-a' to='/signup' href="#"> Go to sign up.</Link></p>
            </div>
        </div>
    )
}

export default SignIn