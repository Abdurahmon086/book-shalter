import React from 'react'
import './index.scss'
import notFoundImg from '../../../public/notFound.svg'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='nFound'>
            <div className="nFound__wrapper">
                <img src={notFoundImg} alt="not image" />
                <div className="nFound__bottom">
                    <Link to='/' className='nFound__btn btn-blue'>Go Home Page</Link>
                    <Link to='/' className='nFound__btn btn-white'>Reload Page</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound