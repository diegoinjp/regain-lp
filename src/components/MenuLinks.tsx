import type { JSXInternal } from 'preact/src/jsx'
import { Menu } from '../utils/config'
import { isGalleryOpen, isModalOpen, modalContent } from '../stores/modalStore'
import type { ModalContentType } from '../utils/types'

function MenuLinks({ itemList }: { itemList: ModalContentType[] }) {
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
          <p onClick={(e) => handleMenu(e, index)} class="relative group hover:text-hotpink-main text-end cursor-pointer">
            {item.title}
            <span className="absolute -bottom-2 right-0 transition-all duration-200 h-1 w-0 group-hover:bg-hotpink-main group-hover:w-full"></span>
          </p>
        ))}
      </div>
    </>
  )
}

export default MenuLinks
