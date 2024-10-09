import React, { useState } from 'react';
import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface SidebarProps extends BaseComponentProps {}

export const Sidebar = ({extraClasses}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => setCollapsed(collapsed => !collapsed);

    return (
        <aside className={classNames(cls.Sidebar, [extraClasses], { [cls.collapsed]: collapsed })}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </aside>
    );
};
