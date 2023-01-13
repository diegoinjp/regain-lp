function MenuLinks({ itemList }: { itemList: string[] }) {
  return (
    <>
      <div className="flex flex-col gap-10 text-2xl">
        {itemList.map((item, index) => (
          <p onClick={() => console.log(index)} class="relative group hover:text-hotpink-main text-end cursor-pointer">
            {item}
            <span className="absolute -bottom-2 right-0 transition-all duration-200 h-1 w-0 group-hover:bg-hotpink-main group-hover:w-full"></span>
          </p>
        ))}
      </div>
    </>
  )
}

export default MenuLinks
