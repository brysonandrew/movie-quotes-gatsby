import * as React from 'react'
import { ImageText } from '../../common/image-text'
const path = '/i-love-the-smell-of-napalm';

export default () => (
  <ImageText
    path={path}
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
