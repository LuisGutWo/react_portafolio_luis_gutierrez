import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_a6l6xm9",
        "template_6jdtamc", form.current, "QVDHpjw6RiU7JDfap")
      .then(
        () => {
          alert('se envió el email satisfactoriamente')
          window.location.reload(false)
        },
        () => {
          alert('error al enviar email, intente de nuevo')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Actualmente me encuentro en búsqueda de nuevos desafíos profesionales que me permitan seguir creciendo en la industria y sector TI, aportando con mi experiencia y aprender nuevas habilidades, especialmente en diseño y desarrollo de aplicaciones web.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Titulo del mensaje"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Luis Gutierrez,
          <br />
          Santiago de Chile,
          <br />
          <span>agutierrezwong@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.4365900, -70.6841300]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.4365900, -70.6841300]}>
              <Popup>Aqui vive Luis, invítale un cafe :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
