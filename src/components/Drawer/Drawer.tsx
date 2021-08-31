import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { FC } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { ImageAvatar } from '../Contents';
import useStyles from './Style';

const DrawerContent: FC = () => {
  const classes = useStyles();

  const tabs = [
    { content: 'About', href: '#top' },
    { content: 'Experience', href: '#experience' },
    { content: 'Education', href: '#education' },
    { content: 'Skills', href: '#skills' },
    { content: 'Projects', href: '#projects' },
  ];

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  return (
    <Box className={classes.centerContent}>
      <List>
        <ImageAvatar />
        {tabs.map(({ content, href }) => (
          <NavHashLink
            to={href}
            className={classes.link}
            scroll={(el) => scrollWithOffset(el)}
          >
            <ListItem button key={content}>
              <ListItemText
                primary={
                  <Typography variant="h6" align="center">
                    {content}
                  </Typography>
                }
              />
            </ListItem>
          </NavHashLink>
        ))}
      </List>
    </Box>
  );
};

export default DrawerContent;
