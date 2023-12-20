import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Button from "../../01-atoms/Button";

type ProjectCardTypes = {
  name: string;
  demoLink?: string;
  children: React.ReactNode;
};

const ProjectCard = ({ name, children, demoLink }: ProjectCardTypes) => (
  <div className="flex h-full w-full flex-col border-2 bg-white px-6 py-5">
    <p className="mb-2 font-semibold">{name}</p>
    <p className="flex-1 text-slate-400">{children}</p>

    <div className="mt-5">
      {/* <Button size="xs" variant="secondary">
        Artikel
      </Button> */}
      {demoLink && (
        <Button
          size="xs"
          variant="secondary"
          as="a"
          href={demoLink}
          target="__blank"
          rel="noopener noreferrer"
        >
          Demo <ArrowTopRightOnSquareIcon className="inline w-4" />
        </Button>
      )}
    </div>
  </div>
);

export default ProjectCard;
