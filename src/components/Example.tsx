
const features = [
  {
    name: 'A wishlist of geers',
    description:
      'Want to be gifted beers for Christmas ? With Zythologue, you can share with your friends and family all the beers you know you like.',
  },
  {
    name: 'A beer know-it-all',
    description: 'Be insufferable by mansplaning about beers everywhere and all the time. People will hate you but you will feel smart',
  },
  {
    name: 'Discover beer cooking',
    description: 'A little bit of Guinness in the sauce ? Be a chef, and join you alcoholism with your cooking skills (if you have some)',
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gray-100">Beer and drinking</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-5xl">
                Beers database              
                </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                This is a friendly reminder that alcohol is dangerous and must be enjoyed with moderation. More infos in our About section. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-200 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-400">

                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0 background-homepage"
          />
        </div>
      </div>
    </div>
  )
}
