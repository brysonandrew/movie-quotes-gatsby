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
        en: 'She\'s a healthy',
        pl: 'To zdrowa',
      },
      {
        en: 'female',
        pl: 'kobieta',
      },
      {
        en: 'of breeding age',
        pl: 'w okresie dojrzałości płciowej',
      }
    ]}
  />
)
