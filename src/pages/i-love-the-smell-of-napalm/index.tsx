import * as React from 'react'
import { ImageText } from '../../common/image-text'
import { path1 } from '../../utils/page'

export default () => (
  <ImageText
    path={path1}
    src={require('./background.jpg')}
    alt="Background image"
    quote={[
      {
        en: 'I love',
        pl: 'Uwielbiam',
      },
      {
        en: 'the smell',
        pl: 'zapach',
      },
      {
        en: 'of napalm',
        pl: 'napalmu',
      },
      {
        en: 'in the morning',
        pl: 'poranku',
      },
    ]}
  />
)
