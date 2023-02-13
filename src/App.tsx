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
        <div className="bg-dark-blue-700 p-6 rounded-2xl">
          <figure className="">
            <a
              href="/#"
              className="flex group relative"
              onClick={onClickWithPreventDefault}
            >
              <img
                src="product.png"
                className="aspect-square object-cover h-full w-[17.375rem] sm:w-full"
                height={302}
                width={302}
                alt="Product"
              />
              <div className="bg-cyan/50 absolute flex h-full items-center justify-center left-0 opacity-0 rounded-lg top-0 transition invisible w-full group-hover:opacity-100 group-hover:visible">
                <IconEye />
              </div>
            </a>
          </figure>
        </div>
      </main>

      <Attribution />
    </>
  )
}
