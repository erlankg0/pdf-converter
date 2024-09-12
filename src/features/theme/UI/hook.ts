import { useAppDispatch, useAppSelect } from "../../../store/hooks.ts";
import { toggleTheme } from "../slice.ts";

export const useTheme = () => {
    const theme = useAppSelect(state => state.theme.mode); // Исправление useAppSelector
    const dispatch = useAppDispatch();

    const handleToggleTheme = (): void => {
        dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
    };

    // Возвращаем массив с темой и функцией переключения
    return [theme, handleToggleTheme] as [string, () => void];
};
