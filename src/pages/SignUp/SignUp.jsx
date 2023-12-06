import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import facebook from '../../../public/Facebook.svg'
import google from '../../../public/google.svg'
import { InputText } from "primereact/inputtext";
import axios from '../../helper/api'
import './index.scss'

function SignUp() {
    const redirect = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        username: ""
    });

    const [token, setToken] = useState()

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: data.name,
            email: data.email,
            key: data.username,
            secret: "MySecredt"
        };

        if (userData.email.length == 0 && userData.key.length == 0) {
            alert('Please enter your username or your username')
        } else {
            axios.post("/signup", userData).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data)
                    redirect('/')
                }
            }).catch(err => console.log(err))
        }
    }
    

    return (
        <div className='signUp'>
            <div className="signUp__wrapper">
                <h2 className='signUp__title'>Sign up</h2>
                <div className="signUp__wrapper-scioal">
                    <a className='signUp__wrapper-link' href="#"><img src={google} alt="google icon" /> Continue with Google</a>
                    <a className='signUp__wrapper-link' href="#"><img src={facebook} alt="facebook icon" />Continue with Google</a>
                </div>
                <div className="signUp__or">
                    <span className='signUp__or-sp'></span>
                    <p className='signUp__or-text'>OR</p>
                    <span className='signUp__or-sp'></span>
                </div>
                <form className='signUp__form' onSubmit={handleSubmit} method="post" action="/">
                    <div className="signUp__form-inner">
                        <label htmlFor="name">Your name</label>
                        <InputText name="name" value={data.name} onChange={handleChange} aria-describedby="name-help" placeholder='Enter your name' />
                    </div>
                    <div className="signUp__form-inner">
                        <label htmlFor="email">Your email</label>
                        <InputText type='email' validateOnly={true} name="email" value={data.email} onChange={handleChange} aria-describedby="email-help" placeholder='Enter your email' />
                    </div>
                    <div className="signUp__form-inner">
                        <label htmlFor="username">Your username</label>
                        <InputText name="username" value={data.username} onChange={handleChange} aria-describedby="username-help" placeholder='Enter your username' />
                    </div>
                    <div>
                        <button type="submit" className='signUp__btn btn-blue' style={{ width: '100%', height: '40px' }}>Button</button>
                        <p className='signUp__link-text'>Already signed up? <Link className='signUp__link-a' to='/signin' href="#"> Go to sign in.</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp