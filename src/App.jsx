import { useEffect, useState } from "react";
import Tab from "./Tab";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handleClick(e.key.toUpperCase());
    });
  }, []);
  const allTabs = [
    {
      key: "q",
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "w",
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "e",
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "a",
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "s",
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "d",
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "z",
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "x",
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "c",
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [active, setActive] = useState("");

  function handleClick(id) {
    const audio = document.getElementById(id);
    audio.play();
    setActive(id);
  }
  return (
    <div
      id="drum-machine"
      className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-slate-300"
    >
      <div
        className=" flex w-56 items-center justify-center rounded-lg bg-slate-400 px-10 py-4 shadow-xl"
        id="display"
      >
        {active}
      </div>

      <div className=" grid grid-cols-3 grid-rows-3 gap-1">
        {allTabs.map((tab) => (
          <Tab
            key={tab.src}
            text={tab.text}
            audio={tab.src}
            id={tab.src}
            onClick={() => handleClick(tab.text)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
