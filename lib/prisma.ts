import { PrismaPg } from "@prisma/adapter-pg";
import { globals } from "./Globals";
import { PrismaClient } from "../generated/prisma/client";


// Use a global variable to store the prisma instance in development
// so it is not re-created every time the file is re-loaded (Hot Reloading).
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
export const PRISMA = new PrismaClient({ adapter });

if(process.env.NODE_ENV !== "production") globals.server.prisma = PRISMA;