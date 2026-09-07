import { useState } from "react"
import { DektopMenu, MenuItem, SignIn, HamburgerButton, MobileMenu } from "./Nav.styles.js"
import { FaBars } from "react-icons/fa"

function Nav() {

    const MenuItems = [
        { title: "Home", href: "#" },
        { title: "How It Works", href: "#" },
        { title: "Courses", href: "#" },
        { title: "Success Stories", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Contact", href: "#" }
    ]

    const [hambMenu, setHambMenu] = useState(false)

    const clickHambMenu = () => {
        setHambMenu(prev => !prev)
    }

    return (
        <>
            <DektopMenu>
                {MenuItems.map((value, index) => (
                    <MenuItem key={index} href={value.href}>{value.title}</MenuItem>
                ))}
                <SignIn to="#">Sign In</SignIn>
            </DektopMenu>
            <HamburgerButton
                onClick={clickHambMenu}
            >
                <FaBars />
            </HamburgerButton>
            <MobileMenu $hambMenu={hambMenu}>
                {MenuItems.map((value, index) => (
                    <MenuItem key={index} href={value.href}>{value.title}</MenuItem>
                ))}
                <SignIn to="#">Sign In</SignIn>
            </MobileMenu>
        </>
    )
}

export default Nav