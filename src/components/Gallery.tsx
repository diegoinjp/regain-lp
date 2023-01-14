import { useStore } from '@nanostores/preact'
import { isGalleryOpen } from '../stores/modalStore'
import { modalBg, skewness } from '../utils/config'
import { getRandom } from '../utils/function'
import type { ICast } from '../utils/types'

const sLarge = 'md:justify-center'
const sSmall = 'justify-start items-center'
const sBg = 'object-cover bg-no-repeact bg-cover bg-right md:bg-center group grayscale hover:grayscale-0 flex-1 hover:grow-[7]'
const sToggleDisplay = 'transition-all group-hover:block hidden'

function Gallery({ galleries = [] }: { galleries: ICast[] }) {
  const $isGalleryOpen = useStore(isGalleryOpen)

  function closeGallery() {
    isGalleryOpen.set(false)
  }

  return (
    <>
      {$isGalleryOpen && (
        <div class={modalBg} onClick={closeGallery}>
          <div class="w-full h-full md:w-5/6 md:h-5/6 md:border-8 self-center md:border-white flex flex-col md:flex-row relative" onClick={(e) => e.stopPropagation()}>
            <p className="absolute top-0 right-0 lg:top-8 lg:right-8 bg-hotpink-main font-bold rounded-bl-lg lg:rounded-lg px-4 py-2 cursor-pointer z-20" onClick={closeGallery}>
              &times;
            </p>
            {galleries.map((cast) => {
              return (
                <div class={`${sBg} ${cast.imgUrl} flex transition-all ${sLarge} ${sSmall}`}>
                  <div className="self-end flex flex-col mb-8 gap-4 relative">
                    <h2 class={`${sToggleDisplay} ${skewness[getRandom()]} text-5xl p-3 bg-hotpink-main lg:text-7xl font-bold text-shadow-lg text-center z-30`}>{cast.role}</h2>
                    <h4 class={`${sToggleDisplay} ${skewness[getRandom()]} p-2 text-2xl lg:text-4xl text-shadow-lg font-bold bg-white text-hotpink-main text-center z-30`}>{cast.name}</h4>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
