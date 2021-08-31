import type { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
// import useStyles from '../Style';

export interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

const Project: FC<ProjectProps> = ({ title, description, url = '' }) => {
  // const classes = useStyles();

  const titleText = url ? (
    <a href={url}>
      <strong>{`${title}: `}</strong>
    </a>
  ) : (
    <strong>{`${title}: `}</strong>
  );

  return (
    <Box mb={5}>
      <Typography variant="body1">
        {titleText}
        {` ${description}`}
      </Typography>
    </Box>
  );
};

export default Project;
