import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps extends BaseComponentProps {}

export const PageError = ({ extraClasses }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => location.reload();

    return (
        <div className={classNames(cls.PageError, [extraClasses])}>
            <p>{t('Some error occurred')}</p>
            <Button type="button" onClick={reload}>
                {t('Reload page')}
            </Button>
        </div>
    );
};
