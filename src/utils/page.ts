import { toPath } from './transformation'
import { ILanguages } from '../common/image-text'
import { defined } from './evaluation'
import { findArrayIndex } from './array'
import { pages } from '../pages/war'

export function Page(name, src, quote) {
  this.name = name
  this.path = toPath(name)
  this.src = src
  this.alt = `${name} Image`
  this.quote = quote
}

export interface IPage {
  name: string
  path: string
  src: string
  alt: string
  quote: ILanguages[]
}

export function prevPath(name: string) {
  const index = findArrayIndex(pages, (page: IPage) => page.name === name)
  const prevPage = pages[index - 1]
  if (defined(prevPage)) {
    return prevPage.path
  } else {
    return '/'
  }
}

export function nextPath(name: string) {
  const index = findArrayIndex(pages, (page: IPage) => page.name === name)
  const nextPage = pages[index + 1]
  if (nextPage) {
    return nextPage.path
  } else {
    return '/'
  }
}
