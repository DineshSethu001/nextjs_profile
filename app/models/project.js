import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tech: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
      required: true,
    },

    live: {
      type: String,
      default: "#",
    },

    github: {
      type: String,
      default: "#",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project ||
  mongoose.model("Project", projectSchema);

export default Project;