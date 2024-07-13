import logo from "assets/icons/logo.svg";
import React, {FC} from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            {/* logo */}
            <div>
                <img src={logo} alt="" />
            </div>
            {/* navbar */}
            <nav></nav>
            {/* avatar */}
            <div></div>
        </header>
    );
};

export default Header;
