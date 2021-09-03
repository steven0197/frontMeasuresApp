import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import Logo from "../Logo"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}));

const UserProfileBox = props => {
    const { className, ...rest } = props;

    const classes = useStyles();


    return (
        <Box
            {...rest}
            className={clsx(classes.root, className)}
        >
           <Logo h='52' w='52' />
            <Typography
                className={classes.name}
                variant="h4"
            >
                Cálculo de Medidas
            </Typography>

        </Box>
    );
};

UserProfileBox.propTypes = {
    className: PropTypes.string
};

export default UserProfileBox;