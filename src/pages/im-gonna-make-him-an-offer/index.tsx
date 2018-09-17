import * as React from 'react'
import { ImageText } from '../../common/image-text'
import { path2 } from '../../utils/page'

export default () => (
  <ImageText
    path={path2}
    src={require('./background.jpg')}
    alt="Background image"
    quote={[
      {
        en: "I'm gonna make him",
        pl: 'Złożę mu',
      },
      {
        en: 'an offer',
        pl: 'propozycję',
      },
      {
        en: "he can't",
        pl: 'nie',
      },
      {
        en: 'refuse',
        pl: 'do odrzucenia',
      },
    ]}
  />
)
