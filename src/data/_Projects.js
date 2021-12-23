import React from "react";

/*
* category : Project / Open Source Tool / Website / Game
* title
* slug
* subtitle
* period
* imageUrl (optional)
* bgColor (optional) : alternate
* tech
* description
* links
*   [{name, link}, {name, link}, ... ]
* team (optional)
*   [{name, link}, {name, link}, ... ]
*/
const projects = [
  {
    category: "Project",
    title: "dummy-project",
    slug: "#dummy-project",
    subtitle:
      "This is my dummy project.",
    period: "From Jan 2020 To Dec 2021",
    tech: "ReactJS, Docusaurus",
    description: (
      <>
        <p>
          An example description with{" "}
          <a href="https://www.google.com">
            link
          </a>
          , and more...
        </p>
      </>
    ),
    links: [
      {
        name: "Google",
        link: "https://www.google.com",
      },
    ],
  },
];

export default projects;