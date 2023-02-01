import { useEffect, useState } from "preact/hooks";

const Loader = () => {
  const [view, setView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setView(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed w-full h-full bg-black top-0 left-0 z-40 ${
        !view && "hidden"
      }`}
    >
      <h1>WELCOME</h1>
    </div>
  );
};

export default Loader;
