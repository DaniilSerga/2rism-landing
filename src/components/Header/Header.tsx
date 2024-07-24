import React, {FC} from 'react';

import avatar from 'assets/icons/avatar.svg';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';

import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <Logo />
                <nav className={styles.navbar}>
                    <a href="/">home</a>
                    <a href="/">hotels</a>
                    <a href="/">restaurants</a>
                    <a href="/">tours</a>
                    <a href="/">destinations</a>
                    <a href="/">activities</a>
                    <a href="/">contact</a>
                </nav>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatarDescription}>
                        <p>Holla,</p>
                        <p>Ales Nesetril</p>
                    </div>
                    <div className={styles.avatarCover}>
                        <img src={avatar} alt="" />
                        <div className={styles.notification}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
