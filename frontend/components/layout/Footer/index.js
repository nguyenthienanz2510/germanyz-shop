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
    h-16 bg-white dark:bg-bg-gray-color flex justify-center items-center text-primary shadow-inner
`