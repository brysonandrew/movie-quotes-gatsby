import * as React from 'react'
import { FogPage } from '../../common/fog-page'

const Wiedzmin = () => (
  <FogPage
    imageProps={{
      src: require('./assets/geralt.jpg'),
      alt: "Rzeź w Blaviken"
    }}
    quote="Zło to zło, Stregoborze - rzekł poważnie wiedźmin wstając. - Mniejsze, większe, średnie, wszystko jedno, proporcje są umowne a granice zatarte. Nie jestem świątobliwym pustelnikiem, nie samo dobro czyniłem w życiu. Ale jeżeli mam wybierać pomiędzy jednym złem a drugim, to wolę nie wybierać wcale."
  />
)

export default Wiedzmin
