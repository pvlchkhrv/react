import React, { useState } from 'react';
import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps extends BaseComponentProps {}

export const Sidebar = ({ extraClasses }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((collapsed) => !collapsed);

    return (
        <aside className={classNames(cls.Sidebar, [extraClasses], { [cls.collapsed]: collapsed })}>
            <button type="button" onClick={onToggle}>{t('Toggle theme')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
};
