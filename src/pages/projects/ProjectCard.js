import React from "react";
import clsx from "clsx";

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import CategoryIcon from "./CategoryIcon"
import styles from "./styles.module.css";

/*
* project
*   title, subtitle, slug, bgColor, category
*   imageUrl, period, tech
*/
const ProjectCard = (props) => {
  const { project } = props;
  return(
    <div
      id={project.title}
      key={project.title + "-card"}
      className="col col--4 margin-bottom--lg"
    >
      <div className={styles.projectCard}>
        {project.imageUrl ? (
          <div className="card__image">
            <img
              src={useBaseUrl(project.imageUrl)}
              alt={project.title}
            />
          </div>
        ) : (
          <div 
            className={
              project.bgColor == "alternate"
                ? "card__image bgColorDanger"
                : "card__image bgColorPrimary"
            }
          >
            <h2>{project.title}</h2>
          </div>
        )}
        <div className="card__body">
          <div className="avatar">
            <div className="avatar__intro margin-left--none">
              <h4 className="avatar__name">
                <CategoryIcon category={project.category} />{" "}
                {project.title}
              </h4>
              <p className="avatar__subtitle">{project.subtitle}</p>
              <small className="avatar__subtitle">
                <FontAwesomeIcon alt="Code" icon={faCalendar} />{" "}
                {project.period}
              </small>
              <small className="avatar__subtitle">
                <FontAwesomeIcon alt="Code" icon={faCode} />{" "}
                {project.tech}
              </small>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <Link
            className={clsx(
              "button button--outline button--primary textUpper",
              styles.projectItemButton
            )}
            to={useBaseUrl(project.slug)}
          > Learn More </Link>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;
