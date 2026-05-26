import { focusAreas } from '../data/portfolioData'

function FocusMarquee() {
  return (
    <section className="marquee" aria-label="Portfolio focus areas">
      {focusAreas.map((area) => (
        <span key={area}>{area}</span>
      ))}
    </section>
  )
}

export default FocusMarquee
