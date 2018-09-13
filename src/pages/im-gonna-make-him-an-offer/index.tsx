import * as React from 'react'
import { ImageText } from '../../common/image-text'
const path = '/im-gonna-make-him-an-offer';
export default () => (
  <ImageText
    path={path}
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
