import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import User from "../User/User";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {changeTheme} from "../../redux/slices/themeSlice";

const Header = () => {
    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();
    const isDark = theme.activeTheme === "dark";
    const handleChangeTheme = () => {
        if (isDark) {
            dispatch(changeTheme("light"));
        } else {
            dispatch(changeTheme("dark"));
        }
    };

    const style = {
        background: isDark ? theme.dark.background : theme.light.background,
        color: isDark ? theme.dark.foreground : theme.light.foreground
    };

    return (
        <div className="header" style={style}>
            <Link to={'/movies'} className="header-title">Movies List</Link>
            <Link to={'/genres'} className="header-title">Genres</Link>
            <button onClick={handleChangeTheme}>
                {isDark ? "Light Theme" : "Dark Theme"}
            </button>
            <User/>
        </div>
    );
};

export default Header;