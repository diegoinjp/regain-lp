import { useStore } from '@nanostores/preact'
import { isGalleryOpen } from '../stores/modalStore'
import type { ICast } from '../utils/types'

const sLarge = 'lg:flex-row lg:justify-center'
const sSmall = 'flex-col justify-start'
const sBg = 'object-cover bg-no-repeact bg-cover bg-center group grayscale hover:grayscale-0 flex-1 hover:grow-[7]'

function Gallery({ galleries = [] }: { galleries: ICast[] }) {
  const $isGalleryOpen = useStore(isGalleryOpen)
  return (
    <>
      {$isGalleryOpen && (
        <div class="w-full h-screen fixed top-0 left-0 z-20 flex">
          <p className="absolute top-0 right-0 lg:top-8 lg:right-8 bg-hotpink-main rounded-bl-lg lg:rounded-lg px-4 py-2 cursor-pointer z-20" onClick={() => isGalleryOpen.set(false)}>
            &nabla;
          </p>
          {galleries.map((cast) => {
            return (
              <div class={`${sBg} ${cast.imgUrl} flex transition-all ${sLarge} ${sSmall}`}>
                <div className="self-end flex flex-col mb-8 gap-4">
                  <h2 class="transition-all group-hover:block hidden text-5xl lg:text-7xl font-bold drop-shadow-xl shadow-black text-center">{cast.role}</h2>
                  <h4 class="transition-all group-hover:block hidden text-2xl lg:text-4xl drop-shadow-xl shadow-black text-center">{cast.name}</h4>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Gallery
