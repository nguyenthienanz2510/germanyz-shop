import tw from "twin.macro";

const Footer = () => {
    return (
        <FooterContainerStyle>
            Footer
        </FooterContainerStyle>
    );
}

export default Footer;

const FooterContainerStyle = tw.footer`
    h-16 bg-white dark:bg-color-gray-rgba-06 flex justify-center items-center shadow-inner
`