import { NextResponse } from "next/server";
import connectMongoDB from "@backend/db/mongodb";
import Timeline from "@backend/models/timeline";

// CREATE timeline
export async function POST(request: Request) {
  try {
    const { date, type, note, message } = await request.json();
    await connectMongoDB();

    const timeline = await Timeline.create({
      date,
      type,
      note,
      message,
    });

    return NextResponse.json(timeline, { status: 201 });
  } catch (error) {
    console.error("POST /api/timelines error:", error);
    return NextResponse.json(
      { error: "Failed to create timeline" },
      { status: 500 }
    );
  }
}

// GET all timelines
export async function GET() {
  try {
    await connectMongoDB();
    const timelines = await Timeline.find().sort({ createdAt: -1 });

    // ✅ return ARRAY
    return NextResponse.json(timelines, { status: 200 });
  } catch (error) {
    console.error("GET /api/timelines error:", error);
    return NextResponse.json(
      { error: "Failed to fetch timelines" },
      { status: 500 }
    );
  }
}
