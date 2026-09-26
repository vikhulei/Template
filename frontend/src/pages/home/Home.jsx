import Hero from "./sections/01_hero/Hero"
import TrustedBy from "./sections/02_trustedBy/TrustedBy"
import Benefits from "./sections/03_benefits/Benefits"
import Courses from "./sections/04_courses/Courses"
import Cta from "./sections/05_cta/Cta"
import SuccessStories from "./sections/06_successStories/SuccessStories"
import Newsletter from "./sections/07_newsletter/Newsletter"

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Benefits />
      <Courses />
      <Cta />
      <SuccessStories />
      <Newsletter />
    </>
  )
}

export default Home