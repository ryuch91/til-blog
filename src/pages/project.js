import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function ProjectHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Projects</p>
      </div>
    </header>
  );
}

export default function Project() {
  return (
    <Layout
      title={`FreeDumb's Projects`}
      description="FreeDumb's Projects">
      <ProjectHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}