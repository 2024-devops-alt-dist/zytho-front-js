import beerPng from '../assets/beer.png';
import pintPng from '../assets/pint.png';
import packPng from '../assets/pack.png';
import breweryPng from '../assets/brewery.png';




const features = [
  {
    name: 'Beers from everywhere',
    description:
      'Belgium, Germany, France, UK, Canada, North America... Our destinations are as diverse as tasty. ',
    img: beerPng,
  },
  {
    name: 'Discover breweries',
    description:
      'So that you can discover all the beers from one brewery ! Learn more about the breweries, their country, their history, etc',
    img: breweryPng,
  },
  {
    name: 'Learn more about beers',
    description:
      'What type of beer is it ? What brewery does it come from ? What are its ingredients ? So many questions Zythologue can answer for you',
    img: packPng,
  },
  {
    name: 'Save your favourite',
    description:
      'Get ready to start your own beer collection, or simply save the beers you want to find later in the database !',
    img: pintPng,
  },
]

export default function Hero() {
  return (
    <section className="bg-gray-800 w-100">
    <div className=" mx-auto max-w-7xl  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-gray-400">Beers and beers</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-300 sm:text-5xl lg:text-balance">
            Zythologue
          </p>
          <p className="mt-6 text-lg/8 text-gray-200">
            The one and only beer database you didn't know you were lacking. Get ready for a game changer ! Discover beers from all around the world, their breweries, their ingredients. Browse and enjoy !
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-200">
                  <div className="">
                    <img src = {feature.img}
                    className='absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg img-css h-10 w-auto'/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div></section>
  )
}
