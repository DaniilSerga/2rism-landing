import React, {FC} from 'react';

import {ReactComponent as StarEmpty} from 'assets/icons/starEmpty.svg';
import {ReactComponent as StarFilled} from 'assets/icons/starFilled.svg';

import {Props} from './type';

import styles from './Rating.module.scss';

const Rating: FC<Props> = ({rating}) => {
    const maxRating = new Array(5).fill('');

    return (
        <div className={styles.container}>
            {maxRating.map((_, index) =>
                index <= rating - 1 ? <StarFilled key={index} /> : <StarEmpty key={index} />,
            )}
        </div>
    );
};

export default Rating;
