import React from 'react';
import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps extends BaseComponentProps {}

export const Navbar = ({extraClasses}: NavbarProps) => {
    return (
        <nav className={classNames(cls.Navbar, [extraClasses])}>
            <ul className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.Secondary}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.Secondary}>About</AppLink>
            </ul>
        </nav>
    );
};
