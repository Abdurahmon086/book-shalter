import React, { useEffect, useState } from 'react'
import './home.scss'
import logo from '../../../public/logo.svg'
import search from '../../../public/search-refraction.svg'
import searchDark from '../../../public/search-refraction-dark.svg'
import circle from '../../../public/x-circle.svg'
import bell from '../../../public/bell.svg'
import profile from '../../../public/profile.jpg'
import plus from '../../../public/plus.svg'
import edit from '../../../public/edit-04.svg'
import trash from '../../../public/trash-01.svg'
import { Link } from 'react-router-dom'
import axios from '../../helper/api'

function Home() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://0001.uz/books').then(res => console.log(res.data))
  }, [])

  return (
    <>
      <header>
        <div className="head container">
          <div className="head__left">
            <Link to='/' className="head__logo">
              <img src={logo} alt="Book list logo" />
            </Link>
            <div className="head__input">
              <img className='head__input-icon' src={search} width={24} height={24} alt="search icon" />
              <img className='head__input-icon1' src={searchDark} width={24} height={24} alt="search icon" />
              <input type="text" placeholder='Search for any training you want ' />
              <img className='head__input-cancel' src={circle} width={20} height={20} alt="cansel icon" />
            </div>
          </div>
          <div className="head__right">
            <div className='head__right-bell'>
              <img src={bell} alt="bell icon" />
            </div>
            <div className="head__person">
              <img className='head__person-img' src={profile} alt="profile image " />
            </div>
          </div>
        </div >
      </header >
      <main>
        <section className='hero'>
          <div className="container hero__wrapper">
            <div className="hero__top">
              <div className="hero__top-inner">
                <h3 className='hero__title'>You’ve got <span className='hero__title-sp'> 7 book </span> </h3>
                <div className="hero__top-right">
                  <input type="text" placeholder='Enter your name' />
                  <button className='hero__btn btn-blue'><img width={16} height={16} src={plus} alt="plus icon" /> Create a book</button>
                </div>
              </div>
              <p className='hero__text'>Your task today</p>
            </div>
            <ul className='hero__list'>
              <li className='hero__item card'>
                <div className="card__hover">
                  <div className="card__hover-inner">
                    <img src={trash} alt="trash icon" />
                  </div>
                  <div className="card__hover-inner">
                    <img src={edit} alt="edit icon" />
                  </div>
                </div>
                <h4 className='card__title'>Raspberry Pi User Guide</h4>
                <p className='card__text'>Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.</p>
                <div className="card__bottom">
                  <p className='card__bottom-text'>Eben Upton: <span> 2012-year</span></p>
                  <span className='card__bottom-sp'>159 pages</span>
                </div>
              </li>

            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home