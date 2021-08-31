import type { FC } from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import type { JobDescriptionProps } from './jobDescription';
import JobDescription from './jobDescription';
import useStyles from '../Style';

export type ExperienceMetadata = JobDescriptionProps[];

const personalData = (): { experience: ExperienceMetadata } => ({
  experience: [
    {
      title: 'Software Developer Intern',
      companyName: 'Ford Motor Australia',
      description: [
        'Develop newcomponents for Ford’s data collecting form and URL shortener, using MongoDB, Express.js,AngularJS and Node.js',
        'Planned and implemented design patternand concepts',
        'Applied Agile process for team project management of 5 people',
      ],
      duration: 'Nov 2020 - Feb 2021',
      techIcons: [
        'github',
        'angular',
        'node',
        'npm',
        'js',
        'bootstrap',
        'sass',
      ],
      technologies: [
        'Front-end: AngularJs, TypeScript',
        'Back-end: ExpressJs, NodeJs, MongoDb',
      ],
    },
    {
      title: 'Sample job title',
      companyName: 'Sample Company Name',
      description: ['Desc1', 'Desc2'],
      duration: 'Sample duration',
      techIcons: ['node', 'js'],
      technologies: ['node', 'js'],
    },
  ],
});

const ExperiencesSection: FC = () => {
  const { experience }: { experience: ExperienceMetadata } = personalData();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div>
          <Typography variant="h2" className={classes.sectionheader}>
            Experience
          </Typography>
          {experience.map(
            ({
              title,
              companyName,
              description,
              duration,
              techIcons,
              technologies,
            }) => (
              <JobDescription
                key={companyName}
                title={title}
                companyName={companyName}
                description={description}
                duration={duration}
                techIcons={techIcons}
                technologies={technologies}
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default ExperiencesSection;
