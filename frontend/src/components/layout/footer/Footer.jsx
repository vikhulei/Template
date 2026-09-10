import { FooterOuter, FooterInner, FooterTop, FooterColumn, FooterHeader, FooterLink, SocialRow, FooterBottom } from "./Footer.styles"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";



function Footer() {

    const FooterContent = [
        { heading: "LinquaPro", text1: "We help people around the world learn English and build a better future through education", },
        { heading: "Resources", text1: "About Us2", href1: "#", text2: "Google", href2: "https://www.google.com", target2: "_blank", href3: "#", text4: "Pricing", href4: "#", text5: "Contact", href5: "#", },
        { heading: "Support", text1: "About Us2", href1: "#", text2: "Courses", href2: "#", text3: "How It Works", href3: "#", text4: "Pricing", href4: "#", text5: "Contact", href5: "#", },
        { heading: "Contact us", text1: "About Us2", href1: "#", text2: "Courses", href2: "#", text3: "How It Works", href3: "#", text4: "Pricing", href4: "#", text5: "00000000", },
    ]

    const SocialIcons = [
        { icon: <FaFacebookF />, href: "https://www.google.com" },
        { icon: <FaTwitter />, href: "https://www.google.com" },
        { icon: <FaInstagram />, href: "https://www.google.com" },
        { icon: <FaYoutube />, href: "https://www.google.com" },
        { icon: <FaLinkedinIn />, href: "https://www.google.com" },
    ]


    return (
        <FooterOuter>
            <FooterInner>
                <FooterTop>
                    {FooterContent.map((value, index) => (
                        <FooterColumn key={index}>
                            <FooterHeader>{value.heading}</FooterHeader>
                            <FooterLink href={value.href1}>{value.text1}</FooterLink>
                            <FooterLink href={value.href2} target="_blank">{value.text2}</FooterLink>
                            <FooterLink href={value.href3}>{value.text3}</FooterLink>
                            <FooterLink href={value.href4}>{value.text4}</FooterLink>
                            <FooterLink href={value.href5}>{value.text5}</FooterLink>
                            {index === 0 && (
                                <SocialRow>
                                    {SocialIcons.map((value, index) => (
                                        <a key={index} href={value.href} target="_blank">
                                            {value.icon}
                                        </a>
                                    ))}
                                </SocialRow>
                            )}
                        </FooterColumn>
                    ))}
                </FooterTop>
                <FooterBottom>
                    Bottom lines will be placed here
                </FooterBottom>
            </FooterInner>
        </FooterOuter>
    )
}

export default Footer