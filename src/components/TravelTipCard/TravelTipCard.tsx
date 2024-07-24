import React, {FC} from 'react';

import {ReactComponent as CalendarIcon} from 'assets/icons/calendar.svg';
import {ReactComponent as CommentIcon} from 'assets/icons/comment.svg';
import {ReactComponent as UserIcon} from 'assets/icons/user.svg';

import {Props} from './type';

import styles from './TravelTipCard.module.scss';

const TravelTipCard: FC<Props> = ({author, commentsAmount, description, img, postedAt, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.coverContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.descriptionContainer}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles.cardFooter}>
                    <div className={styles.postInfo}>
                        <CalendarIcon />
                        <p>{postedAt}</p>
                    </div>
                    <div className={styles.postInfo}>
                        <UserIcon />
                        <p>{author}</p>
                    </div>
                    <div className={styles.postInfo}>
                        <CommentIcon />
                        <p>{commentsAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelTipCard;
