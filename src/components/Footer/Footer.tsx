import React, {FC} from 'react';

import {ReactComponent as ArrowIcon} from 'assets/icons/arrowVariant.svg';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';
import {ReactComponent as MailIcon} from 'assets/icons/mail.svg';
import {ReactComponent as FacebookLogo} from 'assets/icons/socials/facebook.svg';
import {ReactComponent as InstagramLogo} from 'assets/icons/socials/instagram.svg';
import {ReactComponent as TwitterLogo} from 'assets/icons/socials/twitter.svg';
import {Button} from 'components';

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContainer}>
                <div className={styles.socialsContainer}>
                    <div className={styles.logoContainer}>
                        <Logo />
                        <p>
                            We always make our customers happy by providing as many choises as
                            possible
                        </p>
                    </div>
                    <ul className={styles.socialsList}>
                        <li>
                            <a href="/">
                                <FacebookLogo />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <TwitterLogo />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <InstagramLogo />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.usefulLinksContainer}>
                    <div className={styles.linksContainer}>
                        <h4>About</h4>
                        <ul className={styles.linksList}>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Features</a>
                            </li>
                            <li>
                                <a href="/">News</a>
                            </li>
                            <li>
                                <a href="/">Menu</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksContainer}>
                        <h4>Company</h4>
                        <ul className={styles.linksList}>
                            <li>
                                <a href="/">Why 2rism</a>
                            </li>
                            <li>
                                <a href="/">Partner With Us</a>
                            </li>
                            <li>
                                <a href="/">FAQ</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksContainer}>
                        <h4>Support</h4>
                        <ul className={styles.linksList}>
                            <li>
                                <a href="/">Account</a>
                            </li>
                            <li>
                                <a href="/">Support Center</a>
                            </li>
                            <li>
                                <a href="/">Feedback</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contactsContainer}>
                    <h4>
                        Subscribe on our destination review
                        <br />
                        newsletters
                    </h4>
                    <div className={styles.mailWrapper}>
                        <div className={styles.mailContainer}>
                            <MailIcon />
                            <p>Your Email</p>
                            <input placeholder="johndoe@gmail.com" />
                        </div>
                        <Button colorScheme="primary" size="big" icon={<ArrowIcon />} label="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
