import connectMongoDB from "../../../backend/db/mongodb"
import Project from "../../../backend/models/project";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { src, alt, title, desc, website, github, slug, tag = [], tech = [] } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "Missing required fields: title and slug" }, { status: 400 });
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

    return NextResponse.json({ message: "Project created", project }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/projects error:", error);
    const message = error?.message || "Failed to create project";
    const body = process.env.NODE_ENV === "production" ? { error: "Failed to create project" } : { error: message };
    return NextResponse.json(body, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/projects error:", error);
    const message = error?.message || "Failed to fetch projects";
    const body = process.env.NODE_ENV === "production" ? { error: "Failed to fetch projects" } : { error: message };
    return NextResponse.json(body, { status: 500 });
  }
} 
