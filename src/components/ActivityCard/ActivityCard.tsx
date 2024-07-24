import React, {FC} from 'react';

import {Props} from './type';

import styles from './ActivityCard.module.scss';

const ActivityCard: FC<Props> = ({caption, img}) => {
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <p>{caption}</p>
        </div>
    );
};

export default ActivityCard;
