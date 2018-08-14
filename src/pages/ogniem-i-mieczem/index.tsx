import * as React from 'react'
import { FogPage } from '../../common/fog-page'

const OgniemIMieczem = () => (
  <FogPage
    imageProps={{
      src: require('./assets/podbipieta.jpg'),
      alt: "Bohater Ogniem i mieczem"
    }}
    quote="Zwyciężonym łaskę okażcie, to ją przyjmą z wdzięcznością i pamiętać będą; u zwycięzców w pogardę tylko pójdziecie."
  />
)

export default OgniemIMieczem
