import { NextResponse } from "next/server";
import connectMongoDB from "@backend/db/mongodb";
import Project from "@backend/models/project";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();
    const project = await Project.findOne({ slug: params.id });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
