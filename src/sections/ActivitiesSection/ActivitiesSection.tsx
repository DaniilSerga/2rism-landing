import React, {FC} from 'react';

import {ReactComponent as Arrow} from 'assets/icons/arrow.svg';
import {ActivityCard, Button} from 'components';

import {ACTIVITIES} from './cards';

import styles from './ActivitiesSection.module.scss';

const ActivitiesSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeading}>
                    <h2>Activities</h2>
                    <Button
                        colorScheme="secondary"
                        size="small"
                        icon={<Arrow />}
                        iconPlacement="right"
                        label="View all"
                    />
                </div>
                <div>
                    <ul className={styles.activitiesList}>
                        {ACTIVITIES.map((activity) => (
                            <li key={activity.id}>
                                <ActivityCard {...activity} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
