import randomColor from "randomcolor";

import { useEffect, useRef, useState } from "react";

import "./App.css";

const backgrounds: string[] = ["cats", "chubaka", "dogs", "dyno", "planets"];

function App() {
  const ref = useRef<HTMLButtonElement>(null);

  const getRandomBg = (): string =>
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const [buttonColor, setColor] = useState(randomColor());
  const [blocks, changeBlocks] = useState({
    header: getRandomBg(),
    left: getRandomBg(),
    middle: getRandomBg(),
    right: getRandomBg(),
    footer: getRandomBg(),
  });

  useEffect(() => {
    setInterval(() => {
      if (null !== ref.current) ref.current.click();
    }, 31200);
  }, []);

  const updateBg = (): void => {
    setColor(randomColor());
    changeBlocks({
      header: getRandomBg(),
      left: getRandomBg(),
      middle: getRandomBg(),
      right: getRandomBg(),
      footer: getRandomBg(),
    });
  };

  return (
    <div className="holy-grail">
      <button
        ref={ref}
        onClick={updateBg}
        className="button"
        style={{ backgroundColor: buttonColor }}
      >
        Change backgrounds
      </button>

      <header className={`header ${blocks.header}`}>Header</header>

      <main className="holy-grail__main">
        <aside className={`holy-grail__left ${blocks.left}`}>Left</aside>

        <article className={`holy-grail__middle ${blocks.middle}`}>
          Middle
        </article>

        <nav className={`holy-grail__right ${blocks.right}`}>Right</nav>
      </main>

      <footer className={`footer ${blocks.footer}`}>Footer</footer>
    </div>
  );
}

export default App;
