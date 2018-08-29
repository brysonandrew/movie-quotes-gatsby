import { IPage, Page } from '../../../utils/page'
import * as React from 'react'
import { ImageText } from '../../../common/image-text'

export const IWatchedAPage: IPage = new Page(
  'I watched a snail crawl along the edge',
  require('./background.png'),
  [
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
)

const IWatchedA = () => <ImageText {...IWatchedAPage} />

export default IWatchedA
