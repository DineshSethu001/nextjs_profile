import ProjectsClient from "./projectsClient";
import Project from "../../models/project";
import connectDB from "../../lib/mongodb";

export default async function ProjectsPage() {
  await connectDB();

  const projects = await Project.find().lean();

  const serializedProjects = projects.map((project) => ({
    _id: project._id.toString(),
    number: project.number,
    title: project.title,
    category: project.category,
    description: project.description,
    tech: project.tech,
    image: project.image,
    live: project.live,
    github: project.github,
    featured: project.featured,
  }));

  return <ProjectsClient projects={serializedProjects} />;
}