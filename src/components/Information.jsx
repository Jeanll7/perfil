import { AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/information.scss'

import React from 'react'

const Information = () => {
  return (
    <section id='information'>
          <div className="info-card">
              <AiFillPhone id="phone-icon" />
              <div>
                <h3>Telefone</h3>
                <p>(47)997574709</p>
            </div>
          </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>jeanll@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Florianopolis / SC</p>
        </div>
      </div>
    </section>
  )
}

export default Information
