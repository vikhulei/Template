import { useState } from "react"
import { NavWrapper, MenuItem, SignIn, HamburgerButton } from "./Nav.styles.js"
import { FaBars } from "react-icons/fa"

function Nav() {

    const [hambMenu, setHambMenu] = useState(false)

    const clickHambMenu = () => {
        setHambMenu(!hambMenu)
    }

    return (
        <>
            <NavWrapper>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">How It Works</MenuItem>
                <MenuItem href="#">Courses</MenuItem>
                <MenuItem href="#">Success Stories</MenuItem>
                <MenuItem href="#">Pricing</MenuItem>
                <MenuItem href="#">Contact</MenuItem>
                <SignIn to="#">Sign In</SignIn>
            </NavWrapper>
            <HamburgerButton>
                <FaBars />
            </HamburgerButton>
        </>
    )
}

export default Nav