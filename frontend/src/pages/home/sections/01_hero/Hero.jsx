import { HeroOuter, HeroInner, HeroContent, Eyebrow, HeroTitle, HeroTitleHighlight, HeroDescription, HeroActions, ActionsIcon, ActionsText, SocialProof, HeroVisual, HeroImage, CourseProgress } from "./Hero.styles"
import MainButton from "../../../../components/ui/button/MainButton"
import circle from "./Circle.png"
import social from "./social.png"
import heroimg from "./heroimg.png"
import progress from "./progress.png"

function Hero() {
  return (
    <HeroOuter>
      <HeroInner>
        <HeroContent>
          <Eyebrow>SMART WAY TO LEARN</Eyebrow>
          <HeroTitle>Master English. Transform Your <HeroTitleHighlight>Future</HeroTitleHighlight> </HeroTitle>
          <HeroDescription>Interactive courses, real-worl practice, and expert feedback to help you speak English fluently and confidently</HeroDescription>
          <HeroActions>
            <MainButton>
              Start Learning Now   →
            </MainButton>
            <ActionsIcon src={circle}/>
            <ActionsText>Watch Intro Video</ActionsText>
          </HeroActions>
          <SocialProof src={social} />
        </HeroContent>
        <HeroVisual>
          <HeroImage src={heroimg} />
          <CourseProgress src={progress} />
        </HeroVisual>
      </HeroInner>
    </HeroOuter>
  )
}

export default Hero