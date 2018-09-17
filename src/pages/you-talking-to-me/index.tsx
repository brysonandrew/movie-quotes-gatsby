import * as React from 'react'
import { ImageText } from '../../common/image-text'
import { path3 } from '../../utils/page'

export default () => (
  <ImageText
    path={path3}
    src={require('./background.jpg')}
    alt="Background image"
    quote={[
      {
        en: 'You talking to me?',
        pl: 'Do mnie mówisz?',
      }
    ]}
  />
)
