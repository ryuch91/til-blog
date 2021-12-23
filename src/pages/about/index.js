import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import { WorkItems, EducationItems } from "../../data/_About";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b>
        <br />
        <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorPrimary">About me</h2>
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/profile-pic.jpg")} />
              </div>
              <div className="col col--9">
                <h2>Hello,</h2>
                <p>
                  I am Chungkwon Ryu, a System Software Developer who lived in South Korea.
                </p>
                <p>
                  It will be updated soon.
                  I will fill this part with my life and the tech that I want to learn.
                  My projects are listed at{" "}
                  <Link to={useBaseUrl("/projects")}>
                    here
                  </Link>
                  .
                </p>
                <p>
                  I studied{" "}
                  <a href="https://statistics.kaist.ac.kr">
                    Industrial and Systems Engineering
                  </a>{" "}
                  as my major at the{" "}
                  <a href="https://www.kaist.ac.kr">
                    KAIST(Korea Advanced Institute of Science and Technology)
                  </a>{" "}
                  from 2010 to 2015.
                  . I also got my Master degree of Computer Science at{" "}
                  <a href="https://cs.kaist.ac.kr">
                    KAIST
                  </a>{" "}
                  in 2019.
                </p>
                <p>
                  You can read more about{" "}
                  <Link to={useBaseUrl("#experience")}>my experience</Link> or{" "}
                  <Link to={useBaseUrl("#education")}>my education</Link> below
                  if you are interested.
                </p>
              </div>
            </div>
            <div id="experience" className="row padding-vert--xl">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorPrimary">Experience</h2>
              </div>
              <div className="col col--9">
                {WorkItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row padding-vert--xl">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorPrimary">Education</h2>
              </div>
              <div className="col col--9">
                {EducationItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;