import React, {FC, PropsWithChildren} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import css from './Header.module.css';

interface IProps extends PropsWithChildren {
    onToggleTheme: () => void;
    darkThemeEnabled: boolean;
}
// interface HeaderProps {
//     onToggleTheme: () => void;
//     darkThemeEnabled: boolean;
// }

const Header: FC<IProps> = ({ onToggleTheme, darkThemeEnabled }) => {
    const location = useLocation();

    const isDetailsPage = () => location.pathname.includes('/details');

    return (
        <div className={css.Header}>
            <div className={css.navigation}>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/genres">Genres</NavLink>
                {isDetailsPage() && <NavLink to="/details">Details</NavLink>}
            </div>
            <div className={css.setting}>
                <NavLink to="/user">
                    <span className={css.userInfo}>АК</span>
                </NavLink>
                <label className={css.themeToggle}>
                    <input type="checkbox" onChange={onToggleTheme} checked={darkThemeEnabled} />
                    <span className={css.slider}></span>
                </label>
            </div>
        </div>
    );
};

export default Header;