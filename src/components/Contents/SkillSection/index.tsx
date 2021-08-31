import type { FC } from 'react';
import Container from '@material-ui/core/Container';
import { Box, Typography } from '@material-ui/core';
import Skill from './Skill';
import type { SkillProps } from './Skill';
import LangIcon from '../../Icons/LangIcon';
import useStyles from '../Style';

export type TechStackSection = string[];
export type SkillsSections = SkillProps[];

interface SkillsProp {
  skills: SkillsSections;
  techStack: TechStackSection;
}
const skillData = (): SkillsProp => ({
  skills: [
    {
      title: 'Proficiency',
      description: [
        'JavaScript –TypeScript (NodeJS, Express.js, React and Angular)',
        'Java –C#',
        'AWS (EC2, S3, RDS, etc.) and Azure (Container deployment)',
        'Version Control management (Git)',
        'Experience in RESTful API and GraphQL',
        'Experience in SQL (MySQL) and NoSQL (MongoDB)',
        'Ability to draft, evaluate and deliver components in Agile Development Cycle',
      ],
    },
    {
      title: 'Also Learning',
      description: ['Cloud Infrastructure using AWS', 'Quantum Computing'],
    },
  ],
  techStack: [
    'js',
    'node',
    'react',
    'npm',
    'yarn',
    'html5',
    'css3',
    'sass',
    'docker',
    'aws',
    'microsoft',
    'github',
    'bitbucket',
    'trello',
  ],
});

const SkillSection: FC = () => {
  const { skills, techStack }: SkillsProp = skillData();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.sectionheader}>
          Skills
        </Typography>
        <div className={classes.list}>
          {skills.map(({ title, description }) => (
            <Skill title={title} description={description} key={title} />
          ))}
        </div>
        <div className={classes.list}>
          <Box display="flex" flexWrap="wrap">
            {techStack.map((icon) => (
              <LangIcon name={icon} key={icon} />
            ))}
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default SkillSection;
