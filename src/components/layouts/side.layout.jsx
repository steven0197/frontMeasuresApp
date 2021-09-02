import React, { useState } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import Navbar from '../parts/NavBar';
import Sidebar from '../parts/SideBar';
import { makeStyles, useTheme } from '@material-ui/styles';
import { NormalRoute } from '../routes/normal.route';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    },
    shiftContent: {
        paddingLeft: 240
    },
    content: {
        height: '100%'
    }
}));

const SideLayout = (props) => {
    const { children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const shouldOpenSidebar = isDesktop ? true : openSidebar;
    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop 
            })}
        >
            <Navbar onSidebarOpen={handleSidebarOpen} />
            <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
};

const SideLayoutRouter = (props) => {
    return (
        <SideLayout>
            <NormalRoute {...props}/>
        </SideLayout>
    )
};

export default SideLayoutRouter;