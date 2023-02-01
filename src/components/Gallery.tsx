import { useStore } from '@nanostores/preact'
import { useState } from 'preact/hooks'
import { isGalleryOpen } from '../stores/modalStore'
import { modalBg, skewness } from '../utils/config'
import { getRandom } from '../utils/function'
import type { ICast } from '../utils/types'

const sLarge = 'md:justify-center'
const sSmall = 'justify-start items-center bg-center'
const sBg = 'object-cover bg-no-repeact bg-cover group grayscale hover:grayscale-0 flex-1 hover:grow-[7]'
const sToggleDisplay = 'transition-all group-hover:block hidden'
type LangType = 'JP' | 'ENG'

function Gallery({ galleries = [] }: { galleries: ICast[] }) {
  const $isGalleryOpen = useStore(isGalleryOpen)
  const [lang, setLang] = useState<LangType>('JP')

  const closeGallery = () => {
    isGalleryOpen.set(false)
  }

  const changeLanguage = () => {
    lang === 'JP' ? setLang('ENG') : setLang('JP')
  }

  return (
    <>
      {$isGalleryOpen && (
        <div class={modalBg} onClick={closeGallery}>
          <div class="relative flex h-full w-full flex-col self-center border-[10px] border-hotpink-main md:h-5/6 md:w-5/6 md:flex-row md:border-white" onClick={(e) => e.stopPropagation()}>
            <p className="absolute top-0 right-0 z-20 cursor-pointer rounded-bl-lg bg-hotpink-main px-4 py-2 font-bold md:hover:bg-hotpink-light lg:top-8 lg:right-8 lg:rounded-lg" onClick={closeGallery}>
              &times;
            </p>
            {galleries.map((cast) => {
              return (
                <div class={`${sBg} ${cast.imgUrl} flex transition-all ${sLarge} ${sSmall}`} onClick={changeLanguage}>
                  <div className="relative mb-8 flex flex-col gap-4 self-end">
                    <h2 class={`${sToggleDisplay} ${skewness[getRandom()]} text-shadow-lg z-30 bg-hotpink-main p-3  text-center text-4xl font-bold lg:text-6xl`}>{lang === 'JP' ? cast.role : cast.roleReading}</h2>
                    <h4 class={`${sToggleDisplay} ${skewness[getRandom()]} text-shadow-lg z-30 bg-white p-2 text-center text-xl font-bold text-hotpink-main lg:text-3xl`}>{lang === 'JP' ? cast.name : cast.nameReading}</h4>
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
