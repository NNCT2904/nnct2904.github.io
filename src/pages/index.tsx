// import { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import { Box, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Layout from '../components/Layout';
import {
  About,
  Education,
  Experiences,
  Projects,
  Skills,
} from '../components/Contents';
import useStyles from './Style';

export interface SectionType {
  id: string;
  content: ReactNode | Element;
}

const IndexPage: FC = () => {
  const classes = useStyles();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <Skills /> },
    { id: 'projects', content: <Projects /> },
  ];

  const children = sections.map(({ id, content }: SectionType) => (
    <section key={id} id={id}>
      <Box
        className={
          isMobile ? classes.SectionContentmobile : classes.SectionContent
        }
      >
        {content}
      </Box>
      <hr />
    </section>
  ));

  return <Layout>{children}</Layout>;
};

export default IndexPage;
