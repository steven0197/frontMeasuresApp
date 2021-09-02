import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer} from '@material-ui/core';
import {
  Cpu as CPUIcon,
  List as ListIcon,
  Book
} from 'react-feather';
import { makeStyles } from '@material-ui/styles';
import UserProfileBox from '../../elements/UserProfileBox';

import SidebarNav from '../../elements/SidebarNav';

const pages = [
  {
    href: '/form',
    icon: <CPUIcon />,
    title: 'Prueba el modelo'
  },
  {
    href: '/instructions',
    icon: <Book />,
    title: 'Instrucciones'
  },
  {
    href: '/aboutus',
    icon: <ListIcon />,
    title: 'Contactanos'
  }
  

];
const drawerWidth = 256;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));


const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();

  const content = (
    <Box
      {...rest}
      className={clsx(classes.root, className)}
    >
      <UserProfileBox />
      <Divider className={classes.divider} />
      <SidebarNav
          className={classes.nav}
          pages={pages}
        />     
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};


export default Sidebar;

