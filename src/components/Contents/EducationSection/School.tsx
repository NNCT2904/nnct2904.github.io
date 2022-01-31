import type { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../Style';

export interface EducationProps {
  school: string;
  degree: string;
  description: string[];
  duration: string;
}

const Education: FC<EducationProps> = ({
  school,
  degree,
  description,
  duration,
}) => {
  const classes = useStyles();
  return (
    <Box mb={5}>
      <Box display="flex" flexWrap="wrap">
        <Box flexGrow={1}>
          <Typography variant="h4" className={classes.heading4}>
            {school}
          </Typography>
        </Box>
        <Box
          color="primary.main"
          fontSize="body1.fontSize"
          className={classes.duration}
        >
          {duration}
        </Box>
      </Box>
      <Typography variant="h5" className={classes.subheading5}>
        {degree}
      </Typography>
      <div className={classes.list}>
        <ul>
          {description.map((line) => (
            <li key={line}>
              <Typography variant="body1" key={line}>
                {line}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Education;
