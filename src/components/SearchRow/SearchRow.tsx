import React, {FC} from 'react';

import {ReactComponent as Bike} from 'assets/icons/bike.svg';
import {ReactComponent as Calendar} from 'assets/icons/calendar.svg';
import {ReactComponent as Loupe} from 'assets/icons/loupe.svg';
import {ReactComponent as MapPin} from 'assets/icons/mapPin.svg';
import {ReactComponent as Users} from 'assets/icons/users.svg';
import {Button} from 'components/Button';

import styles from './SearchRow.module.scss';

const SearchRow: FC = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.contentContainer}>
                {/* Location */}
                <div className={styles.itemContainer}>
                    <MapPin />
                    <div className={styles.description}>
                        <p>Location</p>
                        <p>Explore nearby destinations</p>
                    </div>
                </div>
                {/* Activity */}
                <div className={styles.itemContainer}>
                    <Bike />
                    <div className={styles.description}>
                        <p>Activity</p>
                        <p>All Activities</p>
                    </div>
                </div>
                {/* When */}
                <div className={styles.itemContainer}>
                    <Calendar />
                    <div className={styles.description}>
                        <p>When</p>
                        <p>Choose a Date</p>
                    </div>
                </div>
                {/* Guests */}
                <div className={styles.itemContainer}>
                    <Users />
                    <div className={styles.description}>
                        <p>Guests</p>
                        <p>1 guest</p>
                    </div>
                </div>
                {/* Search button */}
                <Button colorScheme="primary" size="medium" icon={<Loupe />} />
            </div>
        </div>
    );
};

export default SearchRow;
