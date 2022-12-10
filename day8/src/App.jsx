function App() {
  // See the README about tricky timezone issues!
  // I figured since this is i18n-friendly, we'd wanna
  // make sure the timezones were right :-)
  const christmasDate = new Date("2022/12/25");

  const iconButtonStyle =
    "text-xl w-32px h-32px rounded-full border-1 border-transparent bg-transparent cursor-pointer duration-300 hover:ring-2 hover:border-green-500 hover:ring-green-500 hover:ring-opacity-40 hover:text-green-600";

  return (
    <main className="flex flex-col justify-center h-full mx-auto max-w-600px">
      <section className="flex flex-col items-center leading-loose text-center">
        <div className="text-3xl">
          <span className="i-twemoji-christmas-tree" />
          Happy Holidays!
          <span className="i-twemoji-world-map"></span>
        </div>
        {/* Dates - Check out locales/en.json for the key */}
        {/* Controls - I give you an .icon-button className if you want to use it */}
        {/* Flags - the current locale */}
      </section>
    </main>
  );
}

export default App;
