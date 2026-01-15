import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    src: { type: String },
    alt: { type: String },
    title: { type: String, required: true },
    desc: { type: String },
    website: { type: String },
    github: { type: String },
    slug: { type: String, required: true, unique: true },
    tag: { type: [String], default: [] },
    tech: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
