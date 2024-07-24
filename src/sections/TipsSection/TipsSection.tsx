import React, {FC} from 'react';

import {ReactComponent as Arrow} from 'assets/icons/arrow.svg';
import {Button, TravelTipCard} from 'components';

import {TIPS} from './cards';

import styles from './TipsSection.module.scss';

const TipsSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeading}>
                    <h2>Travel Tips and Advice</h2>
                    <Button
                        colorScheme="secondary"
                        size="small"
                        icon={<Arrow />}
                        iconPlacement="right"
                        label="View all"
                    />
                </div>
                <div className={styles.tipsList}>
                    {TIPS.map((tip) => (
                        <TravelTipCard key={tip.id} {...tip} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TipsSection;
