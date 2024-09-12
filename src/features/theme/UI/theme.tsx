import styles from "./style.module.scss";
import {useTheme} from "./hook.ts";
import {IoMoon, IoMoonOutline} from "react-icons/io5";

const Theme = () => {
    const [theme, handleToggleTheme] = useTheme();
    return (
        <div className={styles.theme} onClick={handleToggleTheme}>
            {theme == 'light' ? (
                <IoMoonOutline size={'14px'}/>
            ) : (<IoMoon size={'14px'}/>)}
        </div>
    )
}
export default Theme;