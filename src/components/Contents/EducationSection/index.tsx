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
      degree: 'Bachelor of Information Technology Honours',
      description: [
        'Research Project: Exploration of Variation Quantum Algorithms',
        // 'Current Quantum devices have some serious constrains due to noise during execution. VQA address those limitations by using a classical optimizer to train a parametrized quantum circuit. Some effects of this method are to mitigate errors while executing Quatum Algorithms and extend quantum Circuit depth.',
      ],
      duration: 'Feb 2022 - Oct 2022',
    },
    {
      school: 'Deakin University',
      degree: 'Bachelor of Information Technology',
      description: [
        'Major in Creative Technology',
        'Graduated with Distinction',
      ],
      duration: 'Jul 2019 - Oct 2021',
    },
    {
      school: 'Deakin College',
      degree: 'Diploma of Information Technology',
      description: [
        'Recipient of Deakin College Vietnam Excellence Scholarship',
      ],
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
          {education.map(({ school, degree, description, duration }) => (
            <School
              school={school}
              degree={degree}
              description={description}
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
