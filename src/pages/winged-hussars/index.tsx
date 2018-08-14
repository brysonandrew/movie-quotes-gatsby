import * as React from 'react'
import { FogPage } from '../../common/fog-page'

const WingedHussars = () => (
  <FogPage
    imageProps={{
      src: require('./assets/winged-hussars.jpg'),
      alt: "Winged Hussars"
    }}
    quote="Honor odwaga i męstwo to cechy które powinny być ważne w życiu każdego człowieka niezależnie od epoki w jakiej żyje - Henryk Sienkiewicz"
  />
)

export default WingedHussars
