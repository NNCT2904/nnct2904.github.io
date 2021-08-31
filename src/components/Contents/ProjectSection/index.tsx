import type { FC } from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Project from './Project';
import type { ProjectProps } from './Project';
import useStyles from '../Style';

export type ProjectsMetadata = ProjectProps[];

const projectsData = (): { projects: ProjectsMetadata } => ({
  projects: [
    {
      title: 'VAIT Discord bot',
      description: 'A bot for VAIT Discord server, written in TypeScript',
    },
    {
      title: 'project 2',
      description: 'description 2',
    },
  ],
});

const ProjectSection: FC = () => {
  const { projects }: { projects: ProjectsMetadata } = projectsData();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.sectionheader}>
          Projects
        </Typography>
        <div className={classes.list}>
          {projects.map(({ title, description, url }) => (
            <Project
              key={title}
              title={title}
              description={description}
              url={url}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;
