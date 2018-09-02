import { toPath } from '../../../utils/transformation'
import { IPage } from '../../../utils/page'
const name = 'Im gonna make him an offer';

export const data: IPage = {
  name,
  path: toPath(name),
  src: require('./background.png'),
  alt: `${name} Image`,
  quote: [
    {
      en: 'I\'m gonna make him',
      pl: 'Złożę mu',
    },
    {
      en: 'an offer',
      pl: 'propozycję',
    },
    {
      en: 'he can\'t',
      pl: 'nie',
    },
    {
      en: 'refuse',
      pl: 'do odrzucenia',
    },
  ]
}
