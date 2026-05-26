function IntroScreen({ isLeaving }) {
  const nameParts = ['Param', 'Patel']
  let letterIndex = 0

  return (
    <section className={`intro-screen ${isLeaving ? 'intro-screen--leaving' : ''}`}>
      <div className="intro-sweep" aria-hidden="true"></div>
      <h1 aria-label="Param Patel">
        {nameParts.map((part) => (
          <span className="intro-word" aria-hidden="true" key={part}>
            {part.split('').map((letter) => {
              const delay = `${0.14 + letterIndex * 0.08}s`
              letterIndex += 1

              return (
                <span
                  className="intro-letter"
                  key={`${part}-${letterIndex}`}
                  style={{ animationDelay: delay }}
                >
                  {letter}
                </span>
              )
            })}
          </span>
        ))}
      </h1>
    </section>
  )
}

export default IntroScreen
