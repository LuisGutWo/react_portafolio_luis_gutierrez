import { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';

import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
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
          <span></span>
          <span></span>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'e', 'r', 'c', 'a', ' ', 'd', 'e', ' ', 'm', 'i']}
              idx={15}
            />
          </h1>
          <p>
            Soy desarrollador Front-end recién egresado. Especializado en React | JavaScript | Html5 | Css | Sass | Git | Bootstrap | Material UI.  Actualmente me encuentro en búsqueda de nuevos desafíos profesionales que me permitan crecer en la industria TI, ya sea en diseño, implementación o desarrollo de aplicaciones web.
          </p>
          <p align="LEFT">
            Como técnico en Hostelería y Turismo, me he dedicado por mas de 18 años al servicio al cliente. Mis habilidades desarrolladas se focalizan en la calidad de servicio y atención al cliente, como también en la supervision, dirección y liderazgo de equipos de trabajo, trato con proveedores y solución de problemas relacionados directamente a la experiencia del cliente que impliquen en la calidad de servicio.
          </p>
          <p>
            Mi vocación de servicio, paciencia y meticulosidad son mis principales características, marcando mi experiencia laboral. Soy un apasionado por la resolución de problemas que impliquen la calidad de servicio. Buenas relaciones interpersonales y trato con clientes.
          </p>
          <p>
            Muy apasionado por las cosas que valoro en esta vida como mi familia, cocinar y escuchar buena música, tener la satisfacción de tomar nuevos desafíos y aprender habilidades nuevas.
          </p>
          <a href="https://www.canva.com/design/DAFgzUcKi5w/J1k21Aj8S8KcBvmIbF1F2Q/view?utm_content=DAFgzUcKi5w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer" className="about-button">MI CV</a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#654E92" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
