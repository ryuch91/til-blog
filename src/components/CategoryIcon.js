import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faGamepad,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const CategoryIcon = ({ category, size = "1x" }) => {
  let faIcon;
  switch (category) {
    case "Project":
      faIcon = faFile;
      break;
    case "Open Source Tool":
      faIcon = faTools;
      break;
    case "Website":
      faIcon = faChrome;
      break;
    case "Game":
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }
  return (
    <FontAwesomeIcon
      alt={category}
      size={size}
      icon={faIcon}
    />
  );
}

export default CategoryIcon;
