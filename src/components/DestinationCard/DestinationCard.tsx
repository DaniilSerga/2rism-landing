import React, {FC} from 'react';

import {Props} from './type';

import styles from './DestinationCard.module.scss';

const DestinationCard: FC<Props> = ({title, img, subheading}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.coverContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.descriptionContainer}>
                <p>{title}</p>
                <p>{subheading}</p>
            </div>
        </div>
    );
};

export default DestinationCard;
