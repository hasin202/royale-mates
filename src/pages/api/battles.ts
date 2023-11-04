import prisma from "@/lib/prisma-client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Before querying the database"); // Log before the query

    const battles = await prisma.battles.findMany();

    console.log("After querying the database"); // Log after the query
    console.log("Battles retrieved from the database:", battles);
    // Test comment
    // Another test comment
    res.status(200).json(battles);
  } catch (error) {
    console.error("An error occurred:", error); // Log any errors that occur
    res.status(500).json({ error: "An internal server error occurred" });
  }
}
