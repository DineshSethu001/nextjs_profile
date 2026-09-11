import ProjectsClient from "./projectsClient";

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = await response.json();

  return <ProjectsClient projects={projects} />;
}