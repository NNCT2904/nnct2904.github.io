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
    {
      title: 'This Resume Page',
      description:
        'This resume is hosted with Github Pages, built with ReactJS Framework and Material UI.',
      url: 'nnct2904.github.io',
    },
    {
      title: 'Capstone Project Earn Your Scrub',
      description:
        'Development of a mobile application to be used as a learning resource for nurses interested in working in the speciality area. Following a Microservices architecture involving a .NET back-end, ReactJS and React Native front-ends, containerized and hosted the back-end as an Azure container instance',
      url: 'https://www.deakin.edu.au/about-deakin/news-and-media-releases/news/it-students-win-prestigious-2021-iawards-for-the-second-year-in-a-row',
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
