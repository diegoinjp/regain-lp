import type { JSXInternal } from 'preact/src/jsx'
import { Menu, skewness } from '../utils/config'
import { useState, useEffect } from 'preact/hooks'
import { isGalleryOpen, isModalOpen, modalContent } from '../stores/modalStore'
import type { ModalContentType } from '../utils/types'
import { getRandom } from '../utils/function'

function MenuLinks({ itemList }: { itemList: ModalContentType[] }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  function handleMenu(e: JSXInternal.TargetedMouseEvent<HTMLParagraphElement>, index: number) {
    e.preventDefault()
    if (index === 1) {
      isGalleryOpen.set(true)
    } else {
      modalContent.set(Menu[index])
      isModalOpen.set(true)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 text-2xl">
        {itemList.map((item, index) => (
          <p onClick={(e) => handleMenu(e, index)} class={`relative group hover:text-hotpink-main md-hover:bg-transparent text-end cursor-pointer p-3 md:p-0 md:bg-transparent hover:bg-white bg-hotpink-main ${windowSize > 400 ? '' : skewness[getRandom()]}`}>
            {item.title}
            <span className="hidden md:block absolute -bottom-2 right-0 transition-all duration-200 h-1 w-0 group-hover:bg-hotpink-main group-hover:w-full"></span>
          </p>
        ))}
      </div>
    </>
  )
}

export default MenuLinks
