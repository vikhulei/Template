import { HeroOuter, HeroInner, HeroContent, Eyebrow, HeroTitle, HeroDescription, HeroActions, ActionsIcon, ActionsText, SocialProof, HeroVisual, HeroImage, CourseProgress } from "./Hero.styles"
import MainButton from "../../../../components/ui/button/MainButton"

function Hero() {
  return (
    <HeroOuter>
      <HeroInner>
        <HeroContent>
          <Eyebrow>SMART WAY TO LEARN</Eyebrow>
          <HeroTitle>Master English. Transform Your Future</HeroTitle>
          <HeroDescription>Interactive courses, real-worl practice, and expert feedback to help you speak English fluently and confidently</HeroDescription>
          <HeroActions>
            <MainButton>
              Start Learning Now
            </MainButton>
            <ActionsIcon>O</ActionsIcon>
            <ActionsText>Watch Intro Video</ActionsText>
          </HeroActions>
          <SocialProof src="#" />
        </HeroContent>
        <HeroVisual>
          <HeroImage src="#" />
          <CourseProgress src="#" />
        </HeroVisual>
      </HeroInner>
    </HeroOuter>
  )
}

export default Hero