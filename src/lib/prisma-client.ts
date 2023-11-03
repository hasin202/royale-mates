import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// check if we are in a production environment
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // check if prisma exists already
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
