import { useState } from 'preact/hooks'

export interface ModalProps {
  id: number
  title: string
}

const Modal = ({ id, title }: ModalProps) => {
  const [open, setOpen] = useState(true)
  const closeModal = () => {
    setOpen(false)
    console.log('closing modal')
  }
  return (
    <>
      {open && (
        <div class="fixed w-full h-screen bg-black/40 grid place-items-center" onClick={closeModal}>
          <div class="bg-hotpink-white p-8 w-[30rem] text-gray-700 text-left flex flex-col gap-3">
            <h1 class="text-4xl uppercase font-semibold first-letter:text-hotpink-main">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, adipisci iure tempora odit recusandae exercitationem, veniam ducimus soluta explicabo dolor est laborum, doloremque culpa obcaecati. In voluptatibus doloremque odio temporibus.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
