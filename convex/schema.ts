import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    picture: v.optional(v.string()),
    emailVerified: v.optional(v.boolean()),
    createdAt: v.number(),
    lastLoginAt: v.optional(v.number()),
  })
    .index("by_email", ["email"]),
  
  tutors: defineTable({
    name: v.string(),
    subject: v.string(),
    subjectName: v.string(),
    rating: v.number(),
    reviews: v.number(),
    price: v.number(),
    image: v.string(),
    bio: v.string(),
    availability: v.string(),
    specializations: v.array(v.string()),
    calendlyLink: v.optional(v.string()),
    createdAt: v.optional(v.number()),
  })
    .index("by_subject", ["subject"]),
});
