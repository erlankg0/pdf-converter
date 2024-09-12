import Logo from "../../logo/UI/logo.tsx";
import Theme from "../../../features/theme/UI/theme.tsx";

const Header = () => {
    return (
        <header className={'flex row justify-between items-center px-8 h-16 bg-blue-600'}>
            <Logo/>
            <Theme/>
        </header>
    )
}

export default Header;