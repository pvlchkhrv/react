import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import './Loader.scss';

interface LoaderProps extends BaseComponentProps {}

export const Loader = ({ extraClasses }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', [extraClasses])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
