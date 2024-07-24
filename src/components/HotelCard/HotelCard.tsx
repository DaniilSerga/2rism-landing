import React, {FC} from 'react';

import {ReactComponent as PinIcon} from 'assets/icons/mapPin.svg';
import {Rating} from 'components';

import {Props} from './type';

import styles from './HotelCard.module.scss';

const HotelCard: FC<Props> = ({img, location, rating, title}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.coverContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.descriptionContainer}>
                <p>{title}</p>
                <div>
                    <div className={styles.locationContainer}>
                        <PinIcon />
                        <p>{location}</p>
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
