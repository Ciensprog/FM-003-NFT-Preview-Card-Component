import { IconClock } from './assets/icons/clock'
import { IconETH } from './assets/icons/eth'
import { IconEye } from './assets/icons/eye'

import { Attribution } from './components/Attribution'

import { onClickWithPreventDefault } from './utilities'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 px-6 z-10">
        <div className="bg-dark-blue-700 max-w-[21.875rem] p-6 rounded-2xl">
          <figure>
            <a
              href="/#"
              className="flex group relative"
              onClick={onClickWithPreventDefault}
            >
              <img
                src="product.png"
                className="aspect-square object-cover"
                height={302}
                width={302}
                alt="Product"
              />
              <div className="bg-cyan/50 absolute flex h-full items-center justify-center left-0 opacity-0 rounded-lg top-0 transition invisible w-full group-hover:opacity-100 group-hover:visible">
                <span className="h-12 w-12">
                  <IconEye />
                </span>
              </div>
            </a>
          </figure>
          <section>
            <h3 className="font-semibold mt-6 text-[1.375rem] text-white">
              Equilibrium #3429
            </h3>
            <p className="font-light mt-4 text-lg text-soft-blue">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex items-center justify-between my-6">
              <div className="flex items-center text-cyan">
                <span className="flex h-[1.125rem] items-center w-3">
                  <IconETH />
                </span>
                <span className="font-semibold ml-1.5">
                  0.041{' '}
                  <abbr className="no-underline" title="Ethereum">
                    ETH
                  </abbr>
                </span>
              </div>
              <div className="flex items-center text-soft-blue">
                <span className="flex h-4 items-center w-4">
                  <IconClock />
                </span>
                <span className="ml-2">3 days left</span>
              </div>
            </div>
          </section>
          <footer className="border-dark-blue-400 border-t flex gap-4 items-center pb-2 pt-4">
            <figure>
              <img
                src="profile.png"
                className="aspect-square object-cover h-full w-[2.0625rem]"
                height={33}
                width={33}
                alt="Profile"
              />
            </figure>
            <div>
              <span className="text-soft-blue">Creation of</span>{' '}
              <a
                href="/#"
                className="text-white hover:text-cyan"
                onClick={onClickWithPreventDefault}
              >
                Jules Wyvern
              </a>
            </div>
          </footer>
        </div>
      </main>

      <Attribution />
    </>
  )
}
