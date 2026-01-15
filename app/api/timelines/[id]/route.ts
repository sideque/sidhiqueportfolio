import { NextResponse } from "next/server";
import connectMongoDB from "@backend/db/mongodb";
import Timeline from "@backend/models/timeline";

// GET single timeline
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();
    const timeline = await Timeline.findById(params.id);

    if (!timeline) {
      return NextResponse.json(
        { error: "Timeline not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(timeline, { status: 200 });
  } catch (error) {
    console.error("GET /api/timelines/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch timeline" },
      { status: 500 }
    );
  }
}

// UPDATE timeline
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    await connectMongoDB();

    const updatedTimeline = await Timeline.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(updatedTimeline, { status: 200 });
  } catch (error) {
    console.error("PUT /api/timelines/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to update timeline" },
      { status: 500 }
    );
  }
}
