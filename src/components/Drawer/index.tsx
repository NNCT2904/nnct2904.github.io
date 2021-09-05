/* eslint-disable no-unused-vars */
import { FC, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import {
  Typography,
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import useStyles from './Style';
import DrawerContent from './DrawerContent';

export interface ResponsiveDrawerProps {
  firstname: string;
  lastname: string;
}

const ResponsiveDrawer: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden mdUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Resume | Thanh Nguyen
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdDown implementation="css">
          <SwipeableDrawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default ResponsiveDrawer;
