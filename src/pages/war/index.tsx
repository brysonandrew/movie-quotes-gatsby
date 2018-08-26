import * as React from 'react'
import * as style from './War.module.css'
import ImageText, { ILanguages } from '../../common/image-text'
import { toPath } from '../../utils/transformation'

export namespace IWar {
  export interface Props {}
}

export function Page(name, quote) {
  this.name = name;
  const path = toPath(name);
  this.src = `./assets/${path}`;
  this.alt = `${name} Image`;
  this.quote = quote;
}

export interface IPage {
  name: string;
  path: string;
  src: string;
  alt: string;
  quote: ILanguages[];
}

const WAR: IPage[] = [
  new Page('I love the...', [
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
    new Page('I watched a...', [
      {
        en: 'I watched a snail',
        pl: 'Obserwowałem ślimaka',
      },
      {
        en: 'crawl along the edge of a straight razor.',
        pl: 'Pełzł po krawędzi ostrza',
      },
      {
        en: 'That\'s my dream',
        pl: 'To mój sen',
      },
      {
        en: 'that\'s my nightmare',
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
    ]),
  ]),
];

export default class War extends React.Component<IWar.Props> {
  private backPath = (index: number) => {
    if (index === 0) {
      return '/';
    } else {
      return WAR[index - 1].path;
    }
  }
  private nextPath = (index: number, length: number) => {
    if (index === length - 1) {
      return '/';
    } else {
      return WAR[index + 1].path;
    }
  }
  public render() {
    return (
      <div>
        {WAR.map((page, index) => (
          <ImageText {...page} backPath={this.backPath(index)} nextPath={this.nextPath(index, WAR.length)} />
        ))}
      </div>

    )
  }
}
