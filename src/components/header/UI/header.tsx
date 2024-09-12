import Logo from "../../logo/UI/logo.tsx";
import Theme from "../../../features/theme/UI/theme.tsx";

const Header = () => {
    return (
        <header className={'flex row justify-between drop-shadow-md'}>
            <Logo/>
            <Theme/>
        </header>
    )
}

export default Header;