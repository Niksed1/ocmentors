import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all tutors
export const getAllTutors = query({
  handler: async (ctx) => {
    return await ctx.db.query("tutors").collect();
  },
});

// Get tutors by subject
export const getTutorsBySubject = query({
  args: { subject: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tutors")
      .withIndex("by_subject", (q) => q.eq("subject", args.subject))
      .collect();
  },
});

// Get tutor by ID
export const getTutorById = query({
  args: { id: v.id("tutors") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new tutor
export const createTutor = mutation({
  args: {
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
    calendlyLink: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tutors", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Update tutor
export const updateTutor = mutation({
  args: {
    id: v.id("tutors"),
    name: v.optional(v.string()),
    subject: v.optional(v.string()),
    subjectName: v.optional(v.string()),
    rating: v.optional(v.number()),
    reviews: v.optional(v.number()),
    price: v.optional(v.number()),
    image: v.optional(v.string()),
    bio: v.optional(v.string()),
    availability: v.optional(v.string()),
    specializations: v.optional(v.array(v.string())),
    calendlyLink: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
    return await ctx.db.get(id);
  },
});

// Delete tutor
export const deleteTutor = mutation({
  args: { id: v.id("tutors") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Bulk import tutors (for data migration)
export const bulkImportTutors = mutation({
  args: {
    tutors: v.array(
      v.object({
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
        calendlyLink: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const insertedIds = [];
    
    for (const tutor of args.tutors) {
      const id = await ctx.db.insert("tutors", {
        ...tutor,
        createdAt: now,
      });
      insertedIds.push(id);
    }
    
    return { count: insertedIds.length, ids: insertedIds };
  },
});
