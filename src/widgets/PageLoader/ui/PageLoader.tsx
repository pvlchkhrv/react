import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps extends BaseComponentProps {}

export const PageLoader = ({ extraClasses }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, [extraClasses])}>
        <Loader />
    </div>
);
