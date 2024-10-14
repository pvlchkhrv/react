import { classNames } from 'helpers';
import { BaseComponentProps } from 'app/types';
import { Button } from 'shared/ui';
import { useEffect, useState } from 'react';

interface BugButtonProps extends BaseComponentProps {}

export const BugButton = ({ extraClasses }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const throwErr = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            className={classNames('', [extraClasses])}
            onClick={throwErr}
        >
            Throw error!
        </Button>
    );
};
