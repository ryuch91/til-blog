import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faLink,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import CategoryIcon from "./CategoryIcon";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";
import projects from "../../data/_Projects";


function Projects() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(projects[0]);
  const slug = useLocation();

  useEffect(() => {
    function handleTransition() {
      if (slug.hash) {
        const project = projects.find((project) => project.slug == slug.hash);

        if (project) {
          setProjectItem(project);
          setShowProjectItem(true);
          window.scrollTo(0, 0);
          return;
        }
      }

      setShowProjectItem(false);
    }

    handleTransition();
  });

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectPageHeader}>
        <h2 className="underlineColorPrimary">My projects</h2>
      </header>
      <main>
        <div className={styles.projectBody}>
          <div className="container">
            <div
              className="row margin-bottom--lg"
              style={{ display: showProjectItem ? "none" : "flex" }}
            >
              {projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </div>
            <div
              className={clsx(
                "text--center margin-bottom--xl",
                styles.projectItem
              )}
              style={{ display: showProjectItem ? "block" : "none" }}
            >
              <Link
                className={clsx(
                  "button button--outline button--primary",
                  styles.projectItemBackButton
                )}
                to={useBaseUrl("/projects")}
              >
                All projects
              </Link>
              <h1>{projectItem.title}</h1>
              <h2>{projectItem.subtitle}</h2>
              {projectItem.imageUrl && (
                <img
                  src={useBaseUrl(projectItem.imageUrl)}
                  alt={projectItem.title}
                />
              )}
              <div>
                <ul>
                  <li>
                    <CategoryIcon category={projectItem.category} />{" "}
                    {projectItem.category}
                  </li>
                  <li>
                    <FontAwesomeIcon alt="Calendar" icon={faCalendar} />{" "}
                    {projectItem.period}
                  </li>
                  <li>
                    <FontAwesomeIcon alt="Code" icon={faCode} />{" "}
                    {projectItem.tech}
                  </li>
                  {projectItem.team && (
                    <li>
                      <FontAwesomeIcon alt="Team" icon={faUsers} />{" "}
                      {projectItem.team.map((member, i) => (
                        <span key={i}>
                          {member.link && (
                            <a href={member.link}>{member.name}</a>
                          )}
                          {!member.link && member.name}
                          {i < projectItem.team.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
                <b>Description</b>
                <div>{projectItem.description}</div>
                {projectItem.links && (
                  <>
                    <b>Links</b>
                    <ul>
                      {projectItem.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.link}>
                            <FontAwesomeIcon alt="Link" icon={faLink} />{" "}
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <Link
                className={clsx(
                  "button button--outline button--primary",
                  styles.projectItemBackButton
                )}
                to={useBaseUrl("/projects")}
              >
                All projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Projects;