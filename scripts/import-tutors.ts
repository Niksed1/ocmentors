/**
 * Script to import tutors data from data/tutors.json into Convex
 * 
 * Usage:
 * 1. Make sure you have CONVEX_URL in your environment (run `npx convex dev` first)
 * 2. Install tsx if needed: npm install -D tsx
 * 3. Run: npx tsx scripts/import-tutors.ts
 */

import { config } from "dotenv";
import { ConvexHttpClient } from "convex/browser";
import * as fs from "fs";
import * as path from "path";

// Load environment variables from .env.local
config({ path: path.join(process.cwd(), ".env.local") });

// Read the tutors JSON file
const tutorsFilePath = path.join(process.cwd(), "data", "tutors.json");
const tutorsData = JSON.parse(fs.readFileSync(tutorsFilePath, "utf-8"));

// Get Convex URL from environment
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.CONVEX_URL;

if (!CONVEX_URL) {
  console.error(
    "Error: NEXT_PUBLIC_CONVEX_URL environment variable is required."
  );
  console.error(
    "Run 'npx convex dev' to set it up, or check your .env.local file."
  );
  process.exit(1);
}

const client = new ConvexHttpClient(CONVEX_URL);

async function importTutors() {
  console.log("Starting tutor import...");
  console.log(`Found ${tutorsData.length} tutors to import`);
  console.log(`Convex URL: ${CONVEX_URL}\n`);

  try {
    // Transform the data - remove the 'id' field since Convex will generate _id
    const tutorsToImport = tutorsData.map(({ id, ...tutor }: any) => tutor);

    console.log("Calling bulk import mutation...");
    
    // Call the bulk import mutation
    const result = await client.mutation("tutors:bulkImportTutors", {
      tutors: tutorsToImport,
    });

    console.log(`\n✅ Successfully imported ${result.count} tutors!`);
    console.log(`📝 ${result.ids.length} records created in Convex database`);
  } catch (error: any) {
    console.error("❌ Error importing tutors:", error.message);
    if (error.data) {
      console.error("Error details:", error.data);
    }
    process.exit(1);
  }
}

importTutors();
