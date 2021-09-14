import type { FC } from 'react';
import { Box, Link, Typography, Container } from '@material-ui/core';
import useStyles from '../Style';
import type { SocialLinkProps } from '../../Icons/SocialIcon';
import SocialIcon from '../../Icons/SocialIcon';

const AboutSection: FC = () => {
  /*
    firstname
    lastname
    address
    email
    */
  const firstname = 'THANH';
  const lastname = 'NGUYEN';
  const address = 'Melbourne, Victoria, Australia';
  const email = 'nnct2000@gmail.com';
  const classes = useStyles();

  const socialLinkData: SocialLinkProps[] = [
    {
      icon: 'fab github',
      name: 'Github',
      url: 'https://github.com/NNCT2904',
    },
    {
      icon: 'fab linkedin-in',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ncng/',
    },
    {
      icon: 'far file-pdf',
      name: 'PDF',
      url: 'https://1drv.ms/u/s!AkGR8J4kpWQvhalCIwBTILKhwGPkgQ?e=Yu8Cp8',
    },
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <Typography variant="h1">
            <Box display="flex" flexWrap="wrap" mb={-1}>
              {firstname}
              <Box color="primary.main">{lastname}</Box>
            </Box>
          </Typography>
        </Box>

        <Box color="text.secondary">
          <Typography variant="h5">
            {`${address} - `}
            <Link href={`mailto:${email}`}>{`${email}`}</Link>
          </Typography>
        </Box>

        <Box fontWeight="fontWeightLight" textAlign="left" mt={3} mb={3}>
          <Typography variant="body1" gutterBottom>
            Final year Bachelor of IT in Deakin University with excellent work
            ethics and ability to study and adapt to various environment.
            Demonstrated IT industrial skills during Internship with Ford Motor
            Au and Leadership during teamwork assignment. Beside my studies, I
            also take part in various of activities and projects of many fields
            (Coding chalenges, side projects and researches)
          </Typography>
        </Box>

        <Box className={classes.socialList}>
          <Box display="flex" flexWrap="wrap">
            {socialLinkData.map(({ icon, name, url }) => (
              <SocialIcon icon={icon} name={name} url={url} />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AboutSection;
