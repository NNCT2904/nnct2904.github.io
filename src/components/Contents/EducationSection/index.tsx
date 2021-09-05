import type { FC } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import School from './School';
import type { EducationProps } from './School';
import useStyles from '../Style';

export type EducationMetadata = EducationProps[];

const educationData = (): { education: EducationMetadata } => ({
  education: [
    {
      school: 'Deakin University',
      degree: 'Bachelor of Information Technology',
      major: 'Creative Technology',
      duration: 'Jul 2019 - Oct 2021',
    },
    {
      school: 'Deakin College',
      degree: 'Diploma of Information Technology',
      major: '',
      duration: 'Nov 2018 - Jun 2019',
    },
  ],
});

const EducationSection: FC = () => {
  const { education }: { education: EducationMetadata } = educationData();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <Typography variant="h2" className={classes.sectionheader}>
            Education
          </Typography>
          {education.map(({ school, degree, major, duration }) => (
            <School
              school={school}
              degree={degree}
              major={major}
              duration={duration}
              key={school}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default EducationSection;
