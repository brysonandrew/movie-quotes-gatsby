import * as React from 'react'
import { FogPage } from '../../common/fog-page'

const Wiedzmin = () => (
  <FogPage
    imageProps={{
      src: require('./assets/malik.jpg'),
      alt: "Pic of Malik with a sweet smile"
    }}
    quote="Kiedyś spałem na podłodze, teraz hajs tam mam"
  />
)

export default Wiedzmin
