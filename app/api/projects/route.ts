import { NextResponse } from "next/server";
import connectMongoDB from "@backend/db/mongodb";
import Project from "@backend/models/project";

/**
 * GET /api/projects
 * Get all projects
 */
export async function GET() {
  try {
    await connectMongoDB();

    const projects = await Project.find().sort({ createdAt: -1 });

    // IMPORTANT: return ARRAY (not { projects })
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/projects
 * Create new project
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      src,
      alt,
      title,
      desc,
      website,
      github,
      slug,
      tag = [],
      tech = [],
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "title and slug are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const project = await Project.create({
      src,
      alt,
      title,
      desc,
      website,
      github,
      slug,
      tag,
      tech,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/projects error:", error);

    // duplicate slug error
    if (error?.code === 11000) {
      return NextResponse.json(
        { error: "Project with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
