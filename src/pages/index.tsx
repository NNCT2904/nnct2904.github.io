// import { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import Layout from '../components/Layout';
import {
  About,
  Education,
  Experiences,
  Projects,
  Skills,
} from '../components/Contents';

export interface SectionType {
  id: string;
  content: ReactNode | Element;
}

const IndexPage: FC = () => {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <Skills /> },
    { id: 'projects', content: <Projects /> },
  ];

  const children = sections.map(({ id, content }: SectionType) => (
    <section key={id} id={id}>
      {content}
      <hr />
    </section>
  ));

  return <Layout>{children}</Layout>;
};

export default IndexPage;
