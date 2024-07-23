import React, {FC} from 'react';

import {DestinationCard} from 'components';

import {DESTINATIONS} from './constants';

import styles from './DestinationSection.module.scss';

const DestinationSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <h2>Popular destinations</h2>
                <ul className={styles.cardsContainer}>
                    {DESTINATIONS.map((destination) => (
                        <li key={destination.id}>
                            <DestinationCard {...destination} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DestinationSection;
