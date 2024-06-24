import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";

const MainLayout = () => {
    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();
    const isDark = theme.activeTheme === "dark";
    const style = {
        background: isDark ? theme.dark.background : theme.light.background,
        color: isDark ? theme.dark.foreground : theme.light.foreground
    };
    return (
        <div>
            <div  style={style}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;