import React, {FC} from 'react';

import {ReactComponent as Arrow} from 'assets/icons/arrow.svg';
import aboutUsCover from 'assets/images/aboutUs.webp';
import {Button} from 'components';

import styles from './AboutUsSection.module.scss';

const AboutUsSection: FC = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeading}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a
                        sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio.
                        Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                    </p>
                    <Button
                        colorScheme="secondary"
                        size="small"
                        icon={<Arrow />}
                        iconPlacement="right"
                        label="Read more"
                    />
                </div>
                <div className={styles.sectionCover}>
                    <img src={aboutUsCover} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
