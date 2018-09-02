import { toPath } from '../../../utils/transformation'
import { IPage } from '../../../utils/page'

const name = 'I didnt expect a fucking rainforest';

export const data: IPage = {
  name,
  path: toPath(name),
  src: require('./background.png'),
  alt: `${name} Image`,
  quote: [
    {
      en: 'I asked you',
      pl: 'Prosiłem',
    },
    {
      en: 'to get me',
      pl: 'o',
    },
    {
      en: 'a refreshing drink',
      pl: 'napój orze że wiający',
    },
    {
      en: 'I didn\'t',
      pl: 'Nie',
    },
    {
      en: 'expect',
      pl: 'zamawiałem',
    },
    {
      en: 'a fucking rainforest',
      pl: 'dżungli',
    },
    {
      en: 'You could fall in love with an orangutan in that',
      pl: 'Szympans by się w tym zakochał.',
    }
  ]
}
