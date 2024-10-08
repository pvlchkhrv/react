import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { BaseComponentProps } from 'app/types';
import { classNames } from 'helpers';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface AppLinkProps extends BaseComponentProps, LinkProps {
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        theme = AppLinkTheme.Primary,
        children,
        extraClasses,
        to,
        ...extraProps
    } = props;

    return (
        <Link to={to}
              className={classNames(cls.AppLink, [extraClasses, cls[theme]])}
              {...extraProps}
        >
            {children}
        </Link>
    );
};
