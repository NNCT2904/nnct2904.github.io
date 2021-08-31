import Avatar from '@material-ui/core/Avatar';
import { FC } from 'react';
import useStyles from './Style';
import avt from './avatar.png';

const ImageAvatar: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Thanh Nguyen" src={avt} className={classes.large} />
    </div>
  );
};

export default ImageAvatar;
