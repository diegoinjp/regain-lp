import { useStore } from '@nanostores/preact'
import { isModalOpen, modalContent } from '../stores/modalStore'
import { modalBg } from '../utils/config'

export interface ModalProps {
  id: number
  title: string
}

const Modal = () => {
  const $isModalOpen = useStore(isModalOpen)
  const $modalContent = useStore(modalContent)

  return (
    <>
      {$isModalOpen && (
        <div class={modalBg} onClick={() => isModalOpen.set(false)}>
          <div class="bg-hotpink-white p-6 md:p-8 w-5/6 md:w-[30rem] text-gray-700 text-left flex flex-col gap-3 relative" onClick={(e) => e.stopPropagation()}>
            <h1 class="text-4xl uppercase font-semibold first-letter:text-hotpink-main">{$modalContent.title}</h1>
            <span class="absolute w-1/6 lg:w-5/12 h-1 top-8 lg:top-10 right-6 lg:right-8 bg-hotpink-main"></span>
            <span class="absolute w-1/5 lg:w-6/12 h-1 top-12 lg:top-14 right-6 lg:right-8 bg-gray-700"></span>
            <div class="max-h-96 overflow-y-scroll">
              <p>{$modalContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
