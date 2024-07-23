import React, {FC} from 'react';

import {DestinationCard} from 'components';

import {DESTINATIONS} from './constants';

import styles from './DestinationSection.module.scss';

const DestinationSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <h2>Popular destinations</h2>
                <div className={styles.cardsContainer}>
                    {DESTINATIONS.map((destination) => (
                        <DestinationCard key={destination.id} {...destination} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationSection;
