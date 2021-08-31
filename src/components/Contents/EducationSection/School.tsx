import type { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../Style';

export interface EducationProps {
  school: string;
  degree: string;
  major: string;
  duration: string;
}

const Education: FC<EducationProps> = ({ school, degree, major, duration }) => {
  const classes = useStyles();
  return (
    <Box mb={5}>
      <Box display="flex" flexWrap="wrap">
        <Box flexGrow={1}>
          <Typography variant="h4" className={classes.heading4}>
            {school}
          </Typography>
        </Box>
        <Box color="primary.main">
          <Typography className={classes.duration}>{duration}</Typography>
        </Box>
      </Box>
      <Typography variant="h5" className={classes.subheading5}>
        {degree}
      </Typography>
      <Typography className={classes.list} gutterBottom>
        {major}
      </Typography>
    </Box>
  );
};

export default Education;
