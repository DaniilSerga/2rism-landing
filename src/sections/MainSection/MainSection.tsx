import React, {FC} from 'react';

import {Button, Header, SearchRow} from 'components';

import styles from './MainSection.module.scss';

const MainSection: FC = () => {
    return (
        <section className={styles.container}>
            <Header />
            <div className={styles.ctaContainer}>
                <h1>Discover the most engaging places</h1>
                <Button colorScheme="primary" label="Discover on 3D Globe" size="big" />
            </div>
            <SearchRow />
        </section>
    );
};

export default MainSection;
