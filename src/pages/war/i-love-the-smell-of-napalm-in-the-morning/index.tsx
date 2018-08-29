import { IPage, Page } from '../../../utils/page'
import * as React from 'react'
import { ImageText } from '../../../common/image-text'

export const ILoveTheSmellPage: IPage = new Page(
  'I love the smell of napalm in the morning',
  require('./background.png'),
  [
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
)

export default function ILoveTheSmell() {
  return <ImageText {...ILoveTheSmellPage} />
}
