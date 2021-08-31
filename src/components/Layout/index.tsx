import '../Icons';
import { FC } from 'react';
import Hidden from '@material-ui/core/Hidden';
import ResponsiveDrawer from '../Drawer';
import useStyles from './Style';

// export type LayoutProps = {
//   title: string;
//   description: string;
// };

const Layout: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <div className={classes.content}>
        <Hidden mdUp implementation="css">
          <div className={classes.toolbar} />
        </Hidden>
        <div className={classes.drawer} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
