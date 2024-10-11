import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps extends BaseComponentProps {}

export const NotFoundPage = ({ extraClasses }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, [extraClasses])}>
            { t('Not found') }
        </div>
    );
};
