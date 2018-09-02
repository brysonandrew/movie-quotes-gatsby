import { toPath } from '../../../utils/transformation'
import { IPage } from '../../../utils/page'
const name = 'I watched a snail crawl along the edge'

export const data: IPage = {
  name,
  path: toPath(name),
  src: require('./background.png'),
  alt: `${name} Image`,
  quote: [
    {
      en: 'I watched a snail',
      pl: 'Obserwowałem ślimaka',
    },
    {
      en: 'crawl along the edge of a straight razor.',
      pl: 'Pełzł po krawędzi ostrza',
    },
    {
      en: "That's my dream",
      pl: 'To mój sen',
    },
    {
      en: "that's my nightmare",
      pl: 'Mój koszmar',
    },
    {
      en: 'Crawling, slithering',
      pl: 'Pełznąć, ślizgać się',
    },
    {
      en: 'along the edge ',
      pl: 'po krawędzi',
    },
    {
      en: 'of a straight razor',
      pl: 'ostrza',
    },
    {
      en: 'and survive',
      pl: 'i przetrwać',
    },
  ]
}
