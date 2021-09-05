import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { FC } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ImageAvatar } from '../Contents';
import useStyles from './Style';

const DrawerContent: FC = () => {
  const classes = useStyles();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    { content: 'About', href: '#about' },
    { content: 'Experience', href: '#experience' },
    { content: 'Education', href: '#education' },
    { content: 'Skills', href: '#skills' },
    { content: 'Projects', href: '#projects' },
  ];

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = isMobile ? -60 : 0;
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
                    {content.toUpperCase()}
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
