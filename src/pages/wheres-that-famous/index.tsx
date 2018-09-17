import * as React from 'react'
import { ImageText } from '../../common/image-text'
import { path5 } from '../../utils/page'

export default () => (
  <ImageText
    path={path5}
    src={require('./background.jpg')}
    alt="Background image"
    quote={[
      {
        en: 'Where\'s',
        pl: 'Gdzie się',
      },
      {
        en: 'that famous',
        pl: 'podział słynny',
      },
      {
        en: 'Archy smile',
        pl: 'uśmiech Archy\'ego?',
      }
    ]}
  />
)
