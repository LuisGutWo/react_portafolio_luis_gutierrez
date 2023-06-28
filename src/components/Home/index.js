import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/letra_l_neon.png'
import LogoReact from '../../assets/images/react_icon_blue.png'
import LogoS from '../../assets/images/letra_l_neon.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['u', 'i', 's', ' ', 'G', 'u', 't', 'i', 'e', 'r', 'r', 'e', 'z']
  const jobArray = [
    'f',
    'r',
    'o',
    'n',
    't',
    '-',
    'e',
    'n',
    'd',
    ' ',
    ' ',
    'r',
    'e',
    'a',
    'c',
    't'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a,</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <img
              src={LogoTitle}
              alt="React Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
            <img
              src={LogoReact}
              className='home-react-logo'
              alt="React Developer Name, Web Developer Name"
            />
          </h1>
          <h2>Desarrollador Front-End / React</h2>
          <NavLink to="/contact" className="flat-button">
            CONTÁCTEME
          </NavLink>
        </div>
        <div className="logo-container">
          <img
            className="solid-logo"
            src={LogoS}
            alt="JavaScript,  Developer"
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
