import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import cls from './Button.module.scss';

export enum ThemeButton {
    Clear = 'clear',

}

interface ButtonProps extends BaseComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        extraClasses,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, [extraClasses, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
