import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from '../../elements/Logo';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Navbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;
  const [notifications] = useState([]);
  const classes = useStyles();




  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo h='52' w='52' />
        </RouterLink>
        <Box className={classes.flexGrow} />
       
       
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default Navbar;