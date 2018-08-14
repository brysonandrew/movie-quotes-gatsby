import * as React from 'react'
import { FogPage } from '../../common/fog-page'

const Wiedzmin = () => (
  <FogPage
    imageProps={{
      src: require('./assets/kali.png'),
      alt: "Rynstok - Kali"
    }}
    quote="Miejski rynsztok - nie szukaj zalet ziomuś, Błędny krok, klik, klak, nie ma Boże dopomóż"
    fogLevel={5}
  />
)

export default Wiedzmin
