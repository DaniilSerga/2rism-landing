import React, {FC} from 'react';

import {ReactComponent as Arrow} from 'assets/icons/arrow.svg';
import {Button, HotelCard} from 'components';

import {HOTELS} from './cards';

import styles from './HotelsSection.module.scss';

const HotelsSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeading}>
                    <h2>Hotels and Restaurants</h2>
                    <Button
                        colorScheme="secondary"
                        size="small"
                        icon={<Arrow />}
                        iconPlacement="right"
                        label="View all"
                    />
                </div>
                <ul className={styles.hotelsList}>
                    {HOTELS.map((hotel) => (
                        <li key={hotel.id}>
                            <HotelCard {...hotel} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HotelsSection;
