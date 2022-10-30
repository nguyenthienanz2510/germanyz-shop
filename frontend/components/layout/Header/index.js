import Link from "next/link";
import tw from "twin.macro";
import ButtonChangeTheme from "./ButtonChangeTheme";

const Header = () => {
    return (
        <HeaderStyle>
            <NavigationStyle>
            <Link href='/'><MainLogoLinkStyle>Germanyz</MainLogoLinkStyle></Link>
            <ButtonChangeTheme/>
            </NavigationStyle>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = tw.header`
    bg-white dark:bg-bg-gray-color shadow-sm
`
const MainLogoLinkStyle = tw.button`
    text-lg font-bold text-primary
`
const NavigationStyle = tw.nav`
    flex justify-between items-center px-5 shadow-md h-16 
` 