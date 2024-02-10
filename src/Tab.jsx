function Tab({ text, audio, id, onClick }) {
  return (
    <button
      className="drum-pad flex h-20 w-20 items-center justify-center rounded-md border-2 border-slate-100 bg-slate-100 text-xl font-bold hover:bg-slate-200 active:bg-slate-300"
      onClick={onClick}
      id={id}
    >
      {text}
      <audio src={audio} id={text} className="clip"></audio>
    </button>
  );
}

export default Tab;
