import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';

interface LangSwitcherProps extends BaseComponentProps {
}

export const LangSwitcher = ({ extraClasses }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div className={classNames('', [extraClasses])}>
            <Button
                type="button"
                onClick={toggle}
                theme={ThemeButton.Clear}
            >
                {t('Translate')}
            </Button>
        </div>
    );
};
