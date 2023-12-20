import React from "react";

import SectionTitle from "../../01-atoms/SectionTitle";
import ProjectCard from "../../02-molecules/ProjectCard";
import Button from "../../01-atoms/Button";

type LatestProjectTypes = {
  projects: {
    title: string;
    description: string;
    demoLink: string;
  }[];
  className: string;

  // A path link to see the articles when the button is clicked
  seeAllLink: string;
};

const LatestProject = ({
  projects,
  className,
  seeAllLink,
}: LatestProjectTypes) => (
  <div className={className}>
    <div className="mb-4 flex items-center justify-between">
      <SectionTitle>Projects</SectionTitle>

      <Button as="a" href={seeAllLink}>
        Lihat Semua
      </Button>
    </div>

    <div className="-m-1 flex flex-wrap sm:flex-row">
      {projects.map((item, index) => (
        <div
          className="w-full p-1 md:w-1/2 lg:w-1/3"
          key={`latest-project-${index}`}
        >
          <ProjectCard name={item.title} demoLink={item.demoLink}>
            {item.description}
          </ProjectCard>
        </div>
      ))}
    </div>
  </div>
);

export default LatestProject;
