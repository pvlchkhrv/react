import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps extends BaseComponentProps {
}

export function ThemeSwitcher({ extraClasses }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.Clear}
            className={classNames(cls.ThemeSwitcher, [extraClasses])}
            onClick={toggleTheme}
        >
            {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
