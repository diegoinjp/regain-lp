import { useEffect, useState } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";
import { isGalleryOpen, isModalOpen, modalContent } from "../stores/modalStore";
import { Menu, skewness } from "../utils/config";
import { getRandom } from "../utils/function";
import type { ModalContentType } from "../utils/types";

function MenuLinks({ itemList }: { itemList: ModalContentType[] }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  function handleMenu(
    e: JSXInternal.TargetedMouseEvent<HTMLParagraphElement>,
    index: number
  ) {
    e.preventDefault();
    if (index === 1) {
      isGalleryOpen.set(true);
    } else {
      modalContent.set(Menu[index]);
      isModalOpen.set(true);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 text-2xl">
        {itemList.map((item, index) => (
          <p
            onClick={(e) => handleMenu(e, index)}
            rel="preload"
            class={`md-hover:bg-transparent group relative cursor-pointer bg-hotpink-main p-3 text-end hover:bg-white hover:text-hotpink-main md:bg-transparent md:p-0 ${
              windowSize > 400 ? "" : skewness[getRandom()]
            }`}
          >
            {item.title}
            <span className="absolute -bottom-2 right-0 hidden h-1 w-0 transition-all duration-200 group-hover:w-full group-hover:bg-hotpink-main md:block"></span>
          </p>
        ))}
      </div>
    </>
  );
}

export default MenuLinks;
