import React from 'react';
import styles from './Header.module.css'
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const isDetailsPage = () => location.pathname.includes('/details');

    return (
        <div className={styles.Header}>
            <div className={styles.navigation}>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/genres">Genres</NavLink>
                {isDetailsPage() && <NavLink to="/details">Details</NavLink>}
            </div>
        </div>
    );
};

export default Header;