import type { FC } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Link } from '@material-ui/core';
import useStyles from '../Style';

const AboutSection: FC = () => {
  /*
    firstname
    lastname
    address
    email
    */
  const firstname = 'THANH';
  const lastname = 'NGUYEN';
  const address = 'Melbourne, Victoria, Austraila';
  const email = 'nnct2000@gmail.com';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <div>
            <Typography variant="h2">
              <Box
                display="flex"
                flexWrap="wrap"
                fontWeight="fontWeightBold"
                mb={-1}
              >
                {firstname}
                <Box color="primary.main">{lastname}</Box>
              </Box>
              <Box
                fontSize="h5.fontSize"
                fontWeight="fontWeightBold"
                color="text.secondary"
              >
                {`${address} - `}
                <Link href={`mailto:${email}`}>{`${email}`}</Link>
              </Box>
            </Typography>
          </div>

          <Typography variant="body1" gutterBottom>
            <Box fontWeight="fontWeightLight" textAlign="justify" mt={3} mb={3}>
              Final year Bachelor of IT in Deakin University with excellentwork
              ethics and ability to study and adapt to various environment.
              Demonstrated IT industrial skills during Internship with Ford
              Motor Au and Leadership during teamwork assignment.
            </Box>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default AboutSection;
