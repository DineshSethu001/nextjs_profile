import connectDB from "../../lib/mongodb";
import Project from "../../models/project";

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({ number: 1 });

    return Response.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);

    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}