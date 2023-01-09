import Modal from './Modal'

function MenuLinks({ itemList }: { itemList: string[] }) {
  return (
    <div className="flex flex-col gap-10 text-2xl text-left">
      {itemList.map((item, index) => (
        <button onClick={() => console.log(index)}>{item}</button>
      ))}
      <Modal>{itemList}</Modal>
    </div>
  )
}

export default MenuLinks
