import type { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../Style';

export interface SkillProps {
  title: string;
  description: string[];
}

const Skill: FC<SkillProps> = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Box mb={5}>
      <Typography variant="h5" className={classes.subheading5}>
        {title}
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
    </Box>
  );
};

export default Skill;
