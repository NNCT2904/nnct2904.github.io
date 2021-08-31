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
      description:
        'A bot for Vietnamese Aussies in IT Discord server, written in TypeScript',
      url: 'https://github.com/viet-aus-it/vait-discord-bot',
    },
    {
      title: 'SafeAus - Australia GovHack 2021',
      description:
        'Collecting data from Government Datasets such as Crime Statistics and Open Space data and user submitted data as a baseline to evaluate the safety rating of public spaces, while maintaining user privacy and anonimity.',
      url: 'https://hackerspace.govhack.org/projects/safeaus_making_australia_safer',
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
