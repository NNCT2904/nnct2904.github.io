import type { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import LangIcon from '../../Icons/LangIcon';
import useStyles from '../Style';

export interface JobDescriptionProps {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
}

const JobDescription: FC<JobDescriptionProps> = ({
  title,
  companyName,
  description,
  duration,
  techIcons,
  technologies,
}) => {
  const classes = useStyles();
  return (
    <Box mb={5}>
      <Box display="flex" flexWrap="wrap">
        <Box flexGrow={1}>
          <Typography variant="h4" className={classes.heading4}>
            {title}
          </Typography>
        </Box>
        <Box color="primary.main">
          <Typography className={classes.duration}>{duration}</Typography>
        </Box>
      </Box>
      <Typography variant="h5" className={classes.subheading5}>
        {companyName}
      </Typography>
      <div className={classes.list}>
        <ul>
          {description.map((line) => (
            <li key={line}>
              <Typography variant="body1">{line}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <Typography variant="h5" className={classes.heading5}>
        Tech stack:
      </Typography>
      <div className={classes.list}>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Box display="flex" flexWrap="wrap">
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default JobDescription;
