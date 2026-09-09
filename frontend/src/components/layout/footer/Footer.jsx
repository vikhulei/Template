import { FooterOuter, FooterInner, FooterColumn, FooterHeader, FooterLink, SocialRow, ContactItem } from "./Footer.styles"


function Footer() {

    const FooterContent = [
        {heading: "LinquaPro", text1: "About Us", href2: "#", text2: "Courses", href3: "#", text3: "How It Works", href4: "#", text4: "Pricing", href5: "#", text5: "Contact", href1: "#",},
        {heading: "Quick Links", text1: "About Us2", href2: "#", text2: "Courses", href3: "#", text3: "How It Works", href4: "#", text4: "Pricing", href5: "#", text5: "Contact", href1: "#",},
        {heading: "Resources", text1: "About Us3", href2: "#", text2: "Courses", href3: "#", text3: "How It Works", href4: "#", text4: "Pricing", href5: "#", text5: "Contact", href1: "#",},
        {heading: "Support", text1: "About Us4", href2: "#", text2: "Courses", href3: "#", text3: "How It Works", href4: "#", text4: "Pricing", href5: "#", text5: "Contact", href1: "#",},
        {heading: "Contact Us", text1: "About Us5", href2: "#", text2: "Courses", href3: "#", text3: "How It Works", href4: "#", text4: "Pricing", href5: "#", text5: "Contact", href1: "#",},
    ]


  return (
    <FooterOuter>
        <FooterInner>
            {FooterContent.map((value, index) => (
                <FooterColumn key={index}>
                    <FooterHeader>{value.heading}</FooterHeader>
                    <FooterLink href={value.href1}>{value.text1}</FooterLink>
                    <FooterLink href={value.href2}>{value.text2}</FooterLink>
                    <FooterLink href={value.href3}>{value.text3}</FooterLink>
                    <FooterLink href={value.href4}>{value.text4}</FooterLink>
                    <FooterLink href={value.href5}>{value.text5}</FooterLink>
                </FooterColumn>
            ))}
        </FooterInner>
    </FooterOuter>
  )
}

export default Footer