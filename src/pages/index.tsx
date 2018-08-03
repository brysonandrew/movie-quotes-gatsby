import * as React from 'react'
import Link from 'gatsby-link'

export interface ISource {
  name: string;
  quotes: string[];
}

export const SOURCES: ISource[] = [
  {
    name: 'Ogniem i mieczem',
    quotes: [
      'Bar... wzięty!',
      'Błogo mi jest, bo prawdę rzekłszy, po miodzie i węgrzynie nie masz jak słońce na stare kości.',
      'Boże, Ty to widzisz i nie grzmisz?',
      'Świat, widzę, przewraca się do góry nogami!',
      'Dajże waćpan spokój',
      'Dziwne materii pomieszanie.',
      'głowa od tego, żeby o skórze myślała.',
      'Hej, nabrali Kozacy i Tatarzy polskiego dobra, ale wziąć a zachować – inna rzecz.',
      ' I co (...) za moje szczęście, że to ja go właśnie wszędy pierwszy spotykam! Psu w gardło takie szczęście! Czy to nie ma innych ludzi na świecie? Niech go inni spotykają! Nie! zawsze ja i ja!',
      'Jak tatarska orda, Bierzesz w jasyr corda!',
      'Ja zaś wolę życie, bo śmierć to na raz sztuka, od której się żadnym dowcipem nie wykręcisz.',
      'Jedzże waćpanna – rzekł – „kiedy w brzuchu pusto, w głowie groch z kapustą...” „Chcesz nie podrwić głową, jedz pieczeń wołową.”'
    ]
  },
  {
    name: 'Wiedzmin',
    quotes: [
      'Świat się zmienia, słońce zachodzi, a wódka się kończy',
      'A ja myślę, że całe zło tego świata bierze się z myślenia. Zwłaszcza w wykonaniu ludzi całkiem ku temu nie mających predyspozycji.',
      'Lepiej zaliczać się do niektórych niż do wszystkich.',
      'Lepiej bez celu iść naprzód niż bez celu stać w miejscu, a z pewnością o niebo lepiej, niż bez celu się cofać.',
    ]
  }
];

const IndexPage = () => (
  <div>
    <h1>Sources</h1>
    <ul>
      {SOURCES.map((source: ISource) => (
        <li key={source.name}>
          <div>{source.name}</div>
          {source.quotes.map((quote, i) => (
            <div key={`quote-${i}`}>
              {quote}
            </div>
          ))}
        </li>
      ))}
    </ul>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </div>
)

export default IndexPage
