import { toPath } from './transformation'
import { ILanguages } from '../common/image-text'
import { defined } from './evaluation'
import { findArrayIndex } from './array'
import { SOURCES_DICT } from '../pages'

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

export function prevPath(name: string, sourceKey: string) {
  const index = findArrayIndex(SOURCES_DICT[sourceKey], (page: IPage) => page.name === name)
  const prevPage = SOURCES_DICT[sourceKey][index - 1]
  if (defined(prevPage)) {
    return prevPage.path
  } else {
    return `/${sourceKey.toLowerCase()}`
  }
}

export function nextPath(name: string, sourceKey: string) {
  const index = findArrayIndex(SOURCES_DICT[sourceKey], (page: IPage) => page.name === name)
  const nextPage = SOURCES_DICT[sourceKey][index + 1]
  if (nextPage) {
    return nextPage.path
  } else {
    return `/${sourceKey.toLowerCase()}`
  }
}
