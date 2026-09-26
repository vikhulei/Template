import { TrustedByOuter, TrustedByInner, TrustedByTitle, LogoList, LogoImage } from "./TrustedBy.styles"
import google from "./google.png"
import microsoft from "./microsoft.png"
import airbnb from "./airbnb.png"
import amazon from "./amazon.png"
import spotify from "./spotify.png"
import udemy from "./udemy.png"


const Images = [
  google,
  microsoft,
  airbnb,
  amazon,
  spotify,
  udemy
]


const TrustedBy = () => {
  return (
    <TrustedByOuter>
      <TrustedByInner>
        <TrustedByTitle>TRUSTED BY LEARNERS AND ORGANIZATIONS WORLDWIDE</TrustedByTitle>
        <LogoList>
          {Images.map((value, index) => (
            <LogoImage key={index} src={value} />
          ))}
        </LogoList>
      </TrustedByInner>
    </TrustedByOuter>
  )
}

export default TrustedBy