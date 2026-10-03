import { TrustedByOuter, TrustedByInner, TrustedByTitle, LogoList, LogoImage } from "./TrustedBy.styles"
import google from "./images/google.png"
import microsoft from "./images/microsoft.png"
import airbnb from "./images/airbnb.png"
import amazon from "./images/amazon.png"
import spotify from "./images/spotify.png"
import udemy from "./images/udemy.png"


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