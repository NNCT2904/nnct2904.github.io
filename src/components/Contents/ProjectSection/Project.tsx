import type { FC } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
// import useStyles from '../Style';

export interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

const Project: FC<ProjectProps> = ({ title, description, url = '' }) => {
  // const classes = useStyles();

  const titleText = url ? (
    <Link href={url} target="blank">
      <strong>{`${title}:`}</strong>
    </Link>
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href="#">
      <strong>{`${title}:`}</strong>
    </Link>
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
