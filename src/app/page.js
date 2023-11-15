'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [nama, setNama] = useState('Ardria Auliya')
  const [inputNama, setInputNama] = useState('')

  function handlerGantiNama() {
    setNama(inputNama)
  }

  function handleInputChange(event) {
    setInputNama(event.target.value)
  }

  return (
    <div className='body'>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/foto.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* NIM dan BIO*/}
              <p>D121211001</p>
              <p>Universitas Hasanuddin</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <div className='cta-input'> 
            <input
              type="text"
              value={inputNama}
              onChange={handleInputChange}
              placeholder="Tuliskan namamu.."
              style={{
                marginRight: '12px'
              }}
            />
            <button
              className='cta-button'
              onClick={handlerGantiNama}
            >
              <p>Halo!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
