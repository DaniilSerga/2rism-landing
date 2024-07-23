import React, {FC} from 'react';

import {Props} from './type';

import styles from './Button.module.scss';

const Button: FC<Props> = ({label = '', size, colorScheme, icon, iconPlacement = 'left'}) => {
    const getClass = () => {
        let sizeClass = '';
        let colorClass = '';

        switch (size) {
            case 'big':
                sizeClass = styles.buttonXl;
                break;
            case 'medium':
                sizeClass = styles.buttonMd;
                break;
            case 'regular':
                sizeClass = styles.buttonSm;
                break;
            case 'small':
                sizeClass = styles.buttonXs;
                break;
        }

        switch (colorScheme) {
            case 'primary':
                colorClass = styles.colorPrimary;
                break;
            case 'secondary':
                colorClass = styles.colorSecondary;
                break;
        }

        return [sizeClass, colorClass].join(' ');
    };

    return (
        <>
            {icon && (
                <>
                    <button className={getClass()}>
                        {iconPlacement === 'left' && icon}
                        {label}
                        {iconPlacement === 'right' && icon}
                    </button>
                </>
            )}
            {!icon && <button className={getClass()}>{label}</button>}
        </>
    );
};

export default Button;
