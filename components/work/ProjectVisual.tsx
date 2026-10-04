import { Project } from "@/types/projects";
import React from "react";

const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <div className="relative min-h-90 overflow-hidden border-t border-border bg-muted lg:min-h-130 lg:border-t-0 lg:border-l">
        {/* Use next/image here */}
      </div>
    );
  }
};

export default ProjectVisual;
