import { toPath } from '../../../utils/transformation'
import { IPage } from '../../../utils/page'

const name = 'I love the smell of napalm in the morning';

export const data: IPage = {
  name,
  path: toPath(name),
  src: require('./background.png'),
  alt: `${name} Image`,
  quote: [
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
  ]
}
