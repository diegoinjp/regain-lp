import { useState } from 'preact/hooks'

export interface ModalProps {
  id: number
  title: string
}

const Modal = ({ id, title }: ModalProps) => {
  const [open, setOpen] = useState(false)
  const closeModal = () => {
    setOpen(false)
    console.log('closing modal')
  }
  return (
    <>
      {open && (
        <div class="fixed w-full h-screen bg-black/40 grid place-items-center" onClick={closeModal}>
          <div class="bg-hotpink-white p-8 w-[30rem] text-gray-700 text-left flex flex-col gap-3 relative" onClick={(e) => e.stopPropagation()}>
            <h1 class="text-4xl uppercase font-semibold first-letter:text-hotpink-main">About</h1>
            <span class="absolute w-5/12 h-1 top-10 right-8 bg-hotpink-main"></span>
            <span class="absolute w-6/12 h-1 top-14 right-8 bg-gray-700"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, adipisci iure tempora odit recusandae exercitationem, veniam ducimus soluta explicabo dolor est laborum, doloremque culpa obcaecati. In voluptatibus doloremque odio temporibus.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
