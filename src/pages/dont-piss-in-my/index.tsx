import * as React from 'react'
import { ImageText } from '../../common/image-text'
import { path4 } from '../../utils/page'

export default () => (
  <ImageText
    path={path4}
    src={require('./background.jpg')}
    alt="Background image"
    quote={[
      {
        en: 'Don\'t piss in my pocket',
        pl: 'Nie lej na mnie',
      },
      {
        en: 'and tell me it\'s raining',
        pl: 'i nie wciskaj mi, że to deszcz',
      }
    ]}
  />
)
